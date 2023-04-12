import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
        .then(data => setCategoryData(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className='my-20'>
                <h2 className='text-center font-bold text-4xl'>Job Category List</h2>
                <p className='text-center small-texts my-5'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
                <div className='flex gap-4 justify-center'>
                    {
                        categoryData.map(item => <JobCategory
                            key={item.id}
                            item={item}
                        ></JobCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;