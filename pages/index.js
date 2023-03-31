import { useState, useEffect } from 'react'

import { LikeButton, Header, Alert } from '../components'
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from 'components/layout';
import utilStyles from 'styles/utils.module.css';
const name = 'Prashant Chaudhari';
import { useTranslation } from 'next-i18next'

function Home() {
  const [likes, setLikes] = useState(0);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const { t, i18n } = useTranslation(
    ['common'], 
    { 
      bindI18n: 'languageChanged loaded' 
    }
  )
  i18n.setResolvedLanguage(i18n.resolvedLanguage || 'en')
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ['common'])
  }, [])

  return (
    <Layout home>
      <Head><title>{siteTitle}</title></Head>
      <header className={utilStyles.header}>
        <>
          <Image
            priority
            src="/images/one_sitting.png"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=""
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <h4>{t('HELLO_WORLD')}</h4>
        </>
      </header>
      <div>
        { 
          showSuccessAlert && <Alert type='success'>Successfule Setup</Alert>
        }
        <button onClick={()=>{setShowSuccessAlert(!showSuccessAlert)}}>{showSuccessAlert ? 'Hide' : 'Show'} Success Alert</button>
        <Header title={ `Welcome to Next.js! Total Likes: ${likes}` }/>
        <Link href="/about">About Us</Link><br/>
        <Link href="/posts">Posts</Link><br/>
        <Link href="/products">Products</Link>
        <hr/>
        <LikeButton likes={likes} setLikes={setLikes}/>
        <br/>
        <Image
          src="/images/eye_icon.svg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default Home
