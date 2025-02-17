import Head from 'next/head'
import { BodyContact } from 'components';

const ContactTemplate: React.FC = () => {
  return (
    <>    
        <Head>
            <title>Jesus Ali</title>
            <meta name="description" content="Jesus Ali Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BodyContact/>
    </>
  )
}

export default ContactTemplate