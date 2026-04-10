import Link from 'next/link';
import React from 'react';

const ProductPage = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    const AllProduct = data.products
    // console.log(data);
    return (
        <div>
            {
                AllProduct.map(value => (
                    <li className='p-3 ' key={value.id}>
                        <Link href={`/product/${value.id}`}>{value.title}</Link>
                    </li>
                ))
            }
        </div>
    );
};

export default ProductPage;