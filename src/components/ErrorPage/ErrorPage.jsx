import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center' style={{height: '100vh'}}>
            <div>
                <h1 className='text-9xl text-bold text-red-700 font-mono'>404</h1>
                <h3 className='text-xl font-bold my-6'>Ops! This Page Could Not Be Found</h3>
                <Link to='/'><button className='common-btn px-20 py-3'>Go To HomePage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;