import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'
import { fetchEntries } from '@utils/contentfulPosts'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gill's first nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
// at the bottom of your component file

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}