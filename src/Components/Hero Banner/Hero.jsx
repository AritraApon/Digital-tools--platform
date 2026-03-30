import React from 'react';
import BannerImage from '../../assets/banner.png';
import Group5 from '../../assets/Group 5.png'
import Vector from '../../assets/Vector.png'


const Hero = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className="relative min-h-162.5 flex items-center overflow-hidden">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-[#e1e7ff] 10 border border-[#c9d2f9] text-[#9215fa] text-sm font-medium px-5 py-2 rounded-full">
                            <img src={Group5} alt="" />
                             New: AI-Powered Tools Available
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tighter ">
                            Supercharge Your
                            <br />
                            <span className="">
                                Digital Workflow
                            </span>
                        </h1>

                        <p className="text-lg text-zinc-700 max-w-lg">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-linear-to-r from-[#672df8] to-[#8a1af9] hover:from-pink-500 hover:to-red-500  transition-all px-5 py-4 rounded-full font-semibold text-lg shadow-xl shadow-blue-500/30 flex items-center gap-3 group text-white">
                                Explore Products
                            </button>
                            <button className='flex items-center gap-3 px-5 py-4 rounded-full font-semibold text-lg border-2 border-violet-700 text-transparent bg-clip-text bg-linear-to-r from-[#672df8] to-[#8a1af9] hover:border-red-600 hover:text-red-600 '>
                               <img src={Vector} alt=""  />  Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                                src={BannerImage}
                                alt="AI Models Banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;