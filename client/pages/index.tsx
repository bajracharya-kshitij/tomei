import type { NextPage } from 'next'
import Head from 'next/head'

import Content from '../components/content'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Tomei</title>
        <meta name="description" content="Welcome to Tomei" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content />
    </div>
  )
}

export default Home
