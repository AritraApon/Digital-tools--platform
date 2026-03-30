import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className=" navbar bg-base-100 shadow-sm py-5 flex-col md:flex-row gap-6">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li>
                                <a>Features</a>
                            </li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li ><a>FAQ</a></li>

                        </ul>
                    </div >
                    <a className="md:mx-30 text-transparent bg-clip-text bg-linear-to-r from-[#672df8] to-[#8a1af9] text-4xl font-extrabold">
                        DigiTools
                    </a>
                </div>
                <div className="navbar-center  hidden lg:flex md:mx-30">
                    <ul className="menu menu-horizontal px-1 text-black font-bold ">
                        <li className='hover:text-violet-700'><a>Products</a></li>
                            <li className='hover:text-violet-700'>
                                <a>Features</a>
                            </li>
                            <li className='hover:text-violet-700'><a>Pricing</a></li>
                            <li className='hover:text-violet-700'><a>Testimonials</a></li>
                            <li className='hover:text-violet-700'><a>FAQ</a></li>
                    </ul>
                </div>
                <div className=" md:mx-30 navbar-end gap-5 ">
                     <div className="relative">
            <div className=" text-xl  rounded-full hover:text-violet-700">
              <FaShoppingCart/>
            </div>


            {/* {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                {carts.length}
              </span>
            )} */}
          </div>
                    <a href="" className='text-black font-bold hover:text-violet-700'>Login</a>
                    <a className="btn bg-linear-to-r from-[#672df8] to-[#8a1af9] rounded-full text-white  hover:from-pink-500 hover:to-red-500  ">   Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;