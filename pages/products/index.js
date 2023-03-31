import { useState, useEffect } from 'react';
import Layout from 'components/layout';
import utilStyles from 'styles/utils.module.css';
import Link from 'next/link';

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 12",
      price: 45000
    },
    {
      id: 2,
      name: "Sony Bravia",
      price: 80000
    },
    {
      id: 3,
      name: "Amazon Echo",
      price: 4000
    }
  ]);

/*
  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('/api/products',{
        'Content-Type': 'application/json'
      });
      setProducts(await response.json())
    }
    fetchData();
  },[])
*/

  return (
    <Layout backLink='/'>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Products</h2>
        <table>
          <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {products.map(({ id, name, price }) => (
              <tr key={id}>
                <td><Link href={`/products/${id}`}>{name}</Link></td>
                <td>{price}</td>
                <td><Link href={`/products/${id}/edit`}>Edit</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}
