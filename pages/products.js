import { useState } from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from 'components/layout';

function Products() {
  return (
    <Layout backLink='/'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <table>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>iPhone 12</td>
            <td>45000</td>
          </tr>
          <tr>
            <td>iPhone 13</td>
            <td>60000</td>
          </tr>
        </table>
      </div>
    </Layout>
  )
}

export default Products
