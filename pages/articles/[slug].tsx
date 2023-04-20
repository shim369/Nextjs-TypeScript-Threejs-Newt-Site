import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeaderInner from '../../components/HeaderInner'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import { getArticles, getArticleBySlug } from '../../lib/newt'
import type { Article } from '../../types/article'

export default function Article({ article }: { article: Article }) {
  return (
    <>
      <Head>
        <title>{article.title} | NEXT BASE</title>
      </Head>
      <div className='wrapper'>
        <header className='blog-header'>
            <HeaderInner />
            <div className="main-read">
              <h1>Tech Blog</h1>
            </div>
        </header>
        <main>
          <section>
            <div className="container">
              <div className='blog-detail'>
              <h1>{article.title}</h1>
              <div className="date"><i className="material-icons">schedule</i>
                      { new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(article.date))}</div>
              <div className="blog-detail-area" dangerouslySetInnerHTML={{ __html: article.body }} />
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


export const getStaticPaths = async () => {
  const articles = await getArticles()
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  return {
    props: {
      article,
    },
  }
}