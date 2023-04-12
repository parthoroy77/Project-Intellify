import React from 'react';
import './Banner.css'
import manImg from '../../assets/All Images/P3OLGJ1 copy 1.png'
const Banner = () => {
    return (
        <div className='banner-container flex  flex-col md:flex-row items-center md:justify-between pt-6 md:px-16 lg:28 px-5'>
            <div className='pl-10'>
                <h1 className='md:text-7xl text-5xl font-bold'>
                    One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span>
                </h1>
                <p className='md:text-lg text-sm my-4' style={{color: '#757575'}}>
                    Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                </p>
                <button className='px-4 py-2'>Get Started</button>
            </div>
            <img src={manImg} className='' alt="" />
        </div>
    );
};

export default Banner;