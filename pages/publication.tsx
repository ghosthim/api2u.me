import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Publication: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>api2u - Publication</title>
        <meta name="description" content="Youngje Lee" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="flex flex-col min-h-screen dark:bg-dark-900">
        <Navbar />
        <main className="container flex flex-col mx-auto flex-1 max-w-3xl px-6">
          <h1 className="font-bold text-xl mb-8 heading-text">Publication</h1>

          <p className="mt-12 font-mono text-xs">
            <abbr title="💡 Not yet">Not yet. More to come ...</abbr>
          </p>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Publication
