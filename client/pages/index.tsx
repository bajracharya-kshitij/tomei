import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Steps from '../components/steps'

import logo from '../public/images/Logo.png'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Tomei</title>
        <meta name="description" content="Welcome to Tomei" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src={logo} alt="Tomei Logo" />
      <Steps />
    </div>
  )
}

export default Home
