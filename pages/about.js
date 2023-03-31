import Layout, {siteTitle} from 'components/layout';
import Head from 'next/head';

export default function About() {
  return (
    <Layout backLink='/'>
      <Head><title>About Us</title></Head>
      <div>About Us Page</div>
    </Layout>
  )
}
