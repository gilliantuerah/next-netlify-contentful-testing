import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'

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
      </main>
      <Post />
      <Footer />
    </div>
  )
}
