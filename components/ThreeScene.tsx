import * as THREE from "three";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function ThreeScene() {
  let canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Canvas
    const canvas = canvasRef.current;

    if (canvas) {
      // Sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.z = 6;
      scene.add(camera);

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Sphere
      const loader = new THREE.TextureLoader();
      const texture = loader.load("/images/g11.svg"); 
      const sphereGeometry = new THREE.SphereGeometry(2.8, 32, 32);
      const material = new THREE.MeshBasicMaterial({ map: texture, wireframe: false });
      const earth = new THREE.Mesh(sphereGeometry, material);

      earth.rotation.x = Math.PI / 8; 
      earth.rotation.y = Math.PI / 8;

      const count = 500;
      const particlesGeometry = new THREE.BufferGeometry();
      const positionArray = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 10;
      }
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positionArray, 3)
      );

      const particleSphereGeometry = new THREE.SphereGeometry(0.01, 8, 8);

      // Create particle mesh array
      const particlesMeshArray: THREE.Mesh[] = [];

      // Create particles
      for (let i = 0; i < count; i++) {
        const particle = new THREE.Mesh(particleSphereGeometry, new THREE.MeshBasicMaterial({ color: "#470073" }));

        const radius = 5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        particle.position.set(x, y, z);
        particlesMeshArray.push(particle);
        scene.add(particle);
      }
      scene.add(earth);

      // Camera
      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.enablePan = false;

      // Animation
      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        camera.position.x = Math.cos(elapsedTime * 0.5) * 6;
        camera.position.z = Math.sin(elapsedTime * 0.5) * 6;

        controls.update();
        renderer.render(scene, camera);

        window.requestAnimationFrame(tick);
      };

      tick();

      // Resize
      const handleResize = () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        controls.dispose();
        renderer.dispose();
        scene.remove(earth);
        particlesMeshArray.forEach((particle) => {
          scene.remove(particle);
        });
        material.dispose();
        texture.dispose();
        particlesGeometry.dispose();
        particleSphereGeometry.dispose();
      };
    }
  }, []);
  return (
    <>
      <div className="canvas-container">
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
    </>
  );
}

export default ThreeScene;