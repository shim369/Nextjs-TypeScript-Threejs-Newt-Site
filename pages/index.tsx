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
// import '@/styles/css/style.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }: { articles: Article[] }) {
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
              <div className="flex-image">
                <Image src="/images/about1.jpg" alt="about1" width={30} height={200} />
                <Image src="/images/about2.jpg" alt="about2" width={30} height={200} />
                <Image src="/images/about3.jpg" alt="about3" width={30} height={200} />
                <Image src="/images/about4.jpg" alt="about4" width={30} height={200} />
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
              <li>
                <div className="skills-img">
                  <Image src="/images/astro.webp" alt="astro" width={100} height={100} />
                </div>
                <div className="skills-text">
                  <h2>Astro</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
                </div>
              </li>
              <li>
                <div className="skills-img">
                  <Image src="/images/js.webp" alt="js" width={100} height={100} />
                </div>
                <div className="skills-text">
                  <h2>JavaScript</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
                </div>
              </li>
              <li>
                <div className="skills-img">
                  <Image src="/images/next.webp" alt="next" width={100} height={100} />
                </div>
                <div className="skills-text">
                  <h2>Next.js</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
                </div>
              </li>
              <li>
                <div className="skills-img">
                  <Image src="/images/nuxt.webp" alt="nuxt" width={100} height={100} />
                </div>
                <div className="skills-text">
                  <h2>Nuxt.js</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
                </div>
              </li>
              <li>
                <div className="skills-img">
                  <Image src="/images/py.webp" alt="python" width={100} height={100} />
                </div>
                <div className="skills-text">
                  <h2>Python</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
                </div>
              </li>
              <li>
                <div className="skills-img">
                  <Image src="/images/figma.webp" alt="figma" width={100} height={100} />
                </div>
                <div className="skills-text">
                  <h2>Figma</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="blog" id="a03">
          <div className="container">
            <h1>Blog</h1>
            <div className="blog-area">
                  {articles
                    .filter((article) => article.category.name === "Next")
                    .slice(0, 3)
                    .map((article) => (
                      <div className="blog-card" key={article._id}>
                      <div className="img-category">
                        <img
                          src={article.coverImage.src}
                          alt={article.title}
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