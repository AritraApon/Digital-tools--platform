import React, { use } from 'react';
import ProductCart from './ProductCart';

const Products = ({productPromise}) => {
    const products = use(productPromise)
    console.log(products)
    return (
        <div>
             <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductCart
                         key={product.id}
                         product={product}  /> )
                }
             </div>
        </div>
    );
};

export default Products;