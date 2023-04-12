import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Home = () => {
    const jobsData = useLoaderData()
    const [categoryData, setCategoryData] = useState([])
    const [showAll, setshowAll] = useState(false)
    
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
                <div className='flex flex-col md:flex-row gap-4 justify-center px-3'>
                    {
                        categoryData.map(item => <JobCategory
                            key={item.id}
                            item={item}
                        ></JobCategory>)
                    }
                </div>
            </div>
            <div>
                <h2 className='text-center font-bold text-4xl'>Featured Jobs</h2>
                <p className='text-center small-texts my-5'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-28 gap-4 job-container'>
                        {
                        showAll === true
                            ? jobsData.map(job => <Job key={job.id}
                            job={job}
                            ></Job>)
                            : jobsData.slice(0, 4).map(job => <Job key={job.id}
                                job={job}
                            ></Job>)
                        }
                </div>
                <div className='text-center my-5'>
                    <button onClick={()=>setshowAll(true)} className='common-btn px-5 py-3'>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Home;