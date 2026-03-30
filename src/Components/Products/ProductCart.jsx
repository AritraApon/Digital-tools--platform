import React from 'react';
import { toast } from 'react-toastify';

const ProductCart = ({ product,carts,setCats }) => {
        const isSelected = carts.find(p=> product.id === p.id)

        const handleBuyBtn = () =>{
            if(!isSelected){
                setCats([...carts,product]);
                toast.success(`${product.name } add to cart`)
            }else{
                toast.error(' Cart all ready Selected')
            }
        }
    return (
        <div>

            <div className="card  bg-white rounded-2xl  shadow-lg  transition-transform duration-300 ease-in-out 
                hover:scale-105 border border-violet-500 hover:shadow-violet-600">

                <div className="card-body relative">
                    <span className={`absolute top-2 right-1 badge badge-sm  ${product.tagType === "popular" ? "bg-violet-300  text-violet-700" :
                        product.tagType === "best" ? "bg-yellow-200 text-yellow-700" :
                            product.tagType === "new" ? "bg-green-200 text-green-700" :
                                "bg-red-100 text-red-600"}  text-right py-2 text-red-600 font-semibold`} >
                        {product.tagType}
                    </span>
                    <p className="flex items-center justify-center 
   text-2xl border-2 border-violet-400 rounded-full bg-violet-100
   w-10 h-10">
                        {product.icon}
                    </p>


                    <div className="space-y-5">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className='text-sm text-light'>{product.description}</p>
                    </div>
                    <div className='flex items-end'>
                        <span className="text-2xl font-bold mt-5">${product.price}</span><span >/month</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.features[0]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.features[1]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.features[2]}</span>
                        </li>

                    </ul>
                    <div className="mt-6">
                        <button onClick={handleBuyBtn} className={`btn  w-full text-white ${isSelected ? ' bg-linear-to-r from-pink-500  to-red-500  ' : 'bg-linear-to-r from-[#672df8] to-[#8a1af9] '} rounded-full `}>
                            {isSelected ? ' Adding to Cart' : 'Buy Now'} </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCart;