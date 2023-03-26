import { useState } from 'react'

import { LikeButton, Header, Alert } from '../components'
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from 'components/layout';
import utilStyles from 'styles/utils.module.css';

function Home() {
  const [likes, setLikes] = useState(0);
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <Layout home>
      <Head><title>{siteTitle}</title></Head>
      <div>
        <Alert type='success'>Successfule Setup</Alert>
        <Header title={ `Welcome to Next.js! Total Likes: ${likes}` }/>
        <Link href="/posts">Posts</Link>
        <hr/>
        <LikeButton likes={likes} setLikes={setLikes}/>
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
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
