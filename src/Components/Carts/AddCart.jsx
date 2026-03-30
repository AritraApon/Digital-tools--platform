import React from 'react';
import { toast } from 'react-toastify';

const AddCart = ({ cart, carts ,setCats}) => {

         const handelRemove = (carts) =>{
            const filterCart = carts.filter(c => c.id !== cart.id)
            console.log(filterCart)
            setCats(filterCart)
            toast.warn('Item removed from cart!')
         }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5 p-3 rounded-2xl shadow bg-violet-50'>
                <div className='flex gap-3 items-center'>
                    <p className="flex items-center justify-center 
   text-2xl border-2 border-violet-400 rounded-full bg-violet-100
   w-10 h-10">
                    {cart.icon} </p>
                    <div>
                        <p className='font-bold'>{cart.name}</p>
                        <p>${cart.price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>handelRemove(carts)} className='font-bold text-red-600 hover:text-red-700 cursor-pointer ' >Remove</button>
                </div>

            </div>
        </div>
    );
};

export default AddCart;