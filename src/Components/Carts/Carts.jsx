import React from 'react';
import AddCart from './AddCart';
import { toast } from 'react-toastify';

const Carts = ({ carts, setCats }) => {
    const handleProceed = () => {
        setCats([])
        toast.success('Your order has been placed successfully! ')
    }

    const total = carts.reduce((sum , price)=> sum + price.price ,0)

    return (
        <div className='w-8/12 mx-auto p-6 rounded-2xl shadow  shadow-blue-300'>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold'>Your Cart</h1>
                 <p className='text-right text-sm font-bold '>Total Price:
                    <span className='bg-blue-700 text-white p-2 rounded-2xl'> $ {total}</span></p>
            </div>

            {
                carts.length === 0 ? <>
                    <div className='text-center text-white font-bold py-20 px-3 rounded-2xl shadow bg-linear-to-b from-[#672df8] to-[#8a1af9] text-2xl  md:text-4xl'>No cart available</div>
                </> :<div>
                <div className='space-y-5'>
                    {
                        carts.map(cart => <AddCart key={cart.id} cart={cart} carts={carts} setCats={setCats} />)
                    }
                </div>
                <div className='flex justify-between mt-5'>
                    <p className='font-bold'>Total</p>
                    <p className='text-2xl font-bold'>$ {total}</p>
                </div>
                <div onClick={handleProceed} className='text-center text-white font-bold p-3 rounded-2xl shadow bg-blue-700 hover:bg-blue-800  my-5'>
                    <p>Proceed to CheckOut</p>
                </div>
            </div>
            }


        </div>
    );
};

export default Carts;