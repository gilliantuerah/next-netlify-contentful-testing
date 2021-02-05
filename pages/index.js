import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'
import { fetchEntries } from '@utils/contentfulPosts'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gillll's first nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />

        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>
      </main>
      <Footer />

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