import React, { use } from 'react';
import ProductCart from './ProductCart';

const Products = ({productPromise,setCats,carts}) => {
    const products = use(productPromise)
    console.log(products)
    return (
        <div>
             <div className='w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-6 rounded-2xl shadow  shadow-blue-300 '>
                {
                    products.map(product => <ProductCart
                         key={product.id}
                         product={product}
                         carts={carts} setCats={setCats}   /> )
                }
             </div>
        </div>
    );
};

export default Products;