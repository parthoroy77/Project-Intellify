import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={`flex justify-between px-5 md:px-16 lg:px-28 items-center navbar h-20 px-10`}>
            <Link to='/'>
                <h3 className='text-3xl font-bold text-blue-700'>Intellify</h3>
            </Link>
            <nav className={`md:static absolute duration-500 ${open ? 'top-16 bg-blue-100 rounded-lg text-center px-4 py-3 right-8 flex-col' : '-top-48 right-8'}`}>
                <a href='/'>Home</a>
                <Link to='/statistic'>Statistic</Link>
                <Link to='/appliedjobs'>Applied Jobs</Link>
                <Link to='/blogs'>Blogs</Link>
            </nav>
            <button className='px-4 py-2'>Start Applying</button>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {
                    open ? <XMarkIcon className="h-6 w-6 text-blue-500" />
                        : <Bars3Icon className="h-6 w-6 text-blue-500"></Bars3Icon>
                }
            </div>
        </div>
    );
};

export default Header;