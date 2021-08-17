import Head from 'next/head'
import Me from '@components/sections/me'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jesus Ali</title>
        <meta name="description" content="Jesus Ali Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Me/>
    </>
  )
}
