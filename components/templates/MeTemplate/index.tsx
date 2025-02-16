import Head from 'next/head'
import { BodyMe } from 'components'

const MeTemplate = () => {
  return (
    <>
        <Head>
            <title>Jesus Ali</title>
            <meta name="description" content="Jesus Ali Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BodyMe/>
    </>
  )
}

export default MeTemplate