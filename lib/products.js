import fs from 'fs';
import path from 'path';

const products = [
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
]

export function getSortedProductsData() {
  return products;
}

export function getAllProductIds() {
  return products.map((product)=>{
    console.log(product)
    return {
      params: {
        id: product.id.toString()
      }
    }
  });
}

export async function getProductData(id) {
  return {
    id: 1,
    name: "iPhone",
    price: 45000
  }
}
