import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='flex justify-around items-center navbar h-20'>
            <Link to='/'>
                <h3 className='text-3xl font-bold text-blue-700'>Intellify</h3>
            </Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/statistic'>Statistic</Link>
                <Link to='/appliedjobs'>Applied Jobs</Link>
                <Link to='/blogs'>Blogs</Link>
            </nav>
            <button className='px-4 py-2'>Start Applying</button>
        </div>
    );
};

export default Header;