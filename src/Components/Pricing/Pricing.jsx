import React from 'react';

const Pricing = () => {
    return (
        <div className='my-10  py-10 md:py-20'>
             <div className='text-center space-y-6 mx-3'>
                <h1 className='text-3xl md:text-5xl font-bold'> Simple, Transparent Pricing</h1>
                <p className='font-extralight '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* cards  */}
            <div className='w-11/12 mx-auto my-10  flex flex-col lg:flex-row justify-center items-center gap-10'>
                {/* 1 */}
                <div className="card px-5 bg-[#f9fafc] shadow-sm  transition-transform duration-300 ease-in-out 
                hover:scale-105">
                    <div className="card-body">
                        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                        <div className="">
                            <h2 className="text-xl font-bold">Starter</h2>
                             <p className='text-sm text-light'>Perfect for getting started </p>
                        </div>
                         <div className='flex items-end'>
                            <span className="text-3xl font-bold ">$0</span><span >/month</span>
                         </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#672df8] to-[#8a1af9] rounded-full text-white  hover:from-pink-500 w-full hover:to-red-500  ">Get Started Free </button>
                        </div>
                    </div>
                    {/* 2nd cart */}
                </div>
                {/* 2  */}
                <div className="card px-5 bg-linear-to-r from-[#672df8] to-[#8a1af9] text-white  shadow-xl  transition-transform duration-300 ease-in-out 
                hover:scale-105">
                    <div className="card-body relative">
                        <span className="absolute -top-2 right-[50%] badge badge-xs badge-warning">Most Popular</span>
                        <div className="">
                            <h2 className="text-xl font-bold">Pro</h2>
                             <p className='text-sm text-light'>Best for professionals </p>
                        </div>
                         <div className='flex items-end'>
                            <span className="text-3xl font-bold ">$29</span><span >/month</span>
                         </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium toolss</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn w-full rounded-full "><span className='text-transparent bg-clip-text bg-linear-to-r from-[#672df8] to-[#8a1af9] '>
                                Start Pro Trial</span> </button>
                        </div>
                    </div>
                    {/* 2nd cart */}
                </div>
                {/* 3 */}
                <div className="card px-5 bg-[#f9fafc] shadow-sm  transition-transform duration-300 ease-in-out 
                hover:scale-105">
                    <div className="card-body">
                        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                        <div className="">
                            <h2 className="text-xl font-bold">Enterprise</h2>
                             <p className='text-sm text-light'>For teams and businesses</p>
                        </div>
                         <div className='flex items-end'>
                            <span className="text-3xl font-bold ">$99</span><span >/month</span>
                         </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#672df8] to-[#8a1af9] rounded-full text-white  hover:from-pink-500 w-full hover:to-red-500  ">Contact Sales </button>
                        </div>
                    </div>
                    {/* 2nd cart */}
                </div>
            </div>
        </div>
    );
};

export default Pricing;