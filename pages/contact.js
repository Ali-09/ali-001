import Head from 'next/head'
import ContactSection from '@components/sections/contact'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Jesus Ali</title>
        <meta name="description" content="Jesus Ali Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactSection/>
    </>
  )
}