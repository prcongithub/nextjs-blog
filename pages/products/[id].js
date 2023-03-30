import Layout from 'components/layout';
import Head from 'next/head';
import { getAllProductIds, getProductData } from 'lib/products';
import Date from 'components/date';
import utilStyles from 'styles/utils.module.css';

export async function getStaticProps({ params }) {
  const productData = await getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProductIds()
  return {
    paths,
    fallback: false
  }
}

export default function Product({ productData }) {
  return (
    <Layout backLink='/products'>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{productData.name}</h1>
        <div>{productData.price}</div>
      </article>
    </Layout>
  );
}
