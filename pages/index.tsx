import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import ThreeScene from '../components/ThreeScene'
import HeaderInner from '../components/HeaderInner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { getArticles } from '../lib/newt'
import type { Article } from '../types/article'
import React, { useEffect } from 'react'
import AOS from 'aos'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }: { articles: Article[] }) {
  const skills = [
    { name: 'Astro', image: '/images/astro.webp' },
    { name: 'JavaScript', image: '/images/js.webp' },
    { name: 'Next.js', image: '/images/next.webp' },
    { name: 'Nuxt.js', image: '/images/nuxt.webp' },
    { name: 'Python', image: '/images/py.webp' },
    { name: 'Django', image: '/images/django.webp' },
    { name: 'Newt', image: '/images/newt.webp' },
    { name: 'Figma', image: '/images/figma.webp' },
  ];
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>NEXT BASE</title>
      </Head>
      <ThreeScene />
      <div className='wrapper'>
      <header>
          <HeaderInner />
          <div className="main-read">
            <h1 className={inter.className}>WEB DEVELOPMENT</h1>
            <p className={inter.className}>Next.js + TypeScript + Three.js + Newt</p>
          </div>
      </header>
      <main>
        <section className="about" id="a01">
          <div className="container">
            <h1>About</h1>
            <div className="flex-box">
              <div className="flex-image" data-aos="fade-up">
                <Image src="/images/keybord.png" alt="about" width={470} height={320} />
              </div>
              <div className="flex-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur laborum autem ea! Facere repellat, quas reiciendis dolores beatae ipsam libero amet vel in pariatur? Ipsa dolores dolore dolorum quas.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur laborum autem ea! Facere repellat, quas reiciendis dolores beatae ipsam libero amet vel in pariatur? Ipsa dolores dolore dolorum quas.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur laborum autem ea! Facere repellat, quas reiciendis dolores beatae ipsam libero amet vel in pariatur? Ipsa dolores dolore dolorum quas.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="a02">
          <div className="container skills">
            <h1>Skills</h1>
            <ul className="skills-detail">
            {skills.map((skill, index) => (
              <li
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="skills-img">
                  <Image src={skill.image} alt={skill.name} width={100} height={100} />
                </div>
                <div className="skills-text">
                  <h2>{skill.name}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </section>
        <section className="blog" id="a03">
          <div className="container">
            <h1>Blog</h1>
            <div className="blog-area" data-aos="fade-up">
                  {articles
                    .filter((article) => article.category.name === "Next")
                    .slice(0, 3)
                    .map((article) => (
                      <div className="blog-card" key={article._id}>
                      <div className="img-category">
                        <img
                          src={article.coverImage.src}
                          alt={article.title}
                          width="417"
                          height="200"
                        />
                        <h3>Next</h3>
                      </div>
                      <div className="date"><i className="material-icons">schedule</i>
                      { new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(article.date))}</div>
                      <h2>{article.title}</h2>
                      <Link href={`articles/${article.slug}`} className="btn-s">Read more</Link>
                      </div>
                  ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
	const articles = await getArticles()
	return {
	  props: {
		articles,
	  },
	}
}