import Head from 'next/head'
import { BodyAbout } from 'components'

const AboutTemplate: React.FC = () => {
  return (
    <>
        <Head>
            <title>Jesus Ali</title>
            <meta name="description" content="Jesus Ali Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BodyAbout/>
    </>
  )
}

export default AboutTemplate