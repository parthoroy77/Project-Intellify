import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedData, setAppliedData] = useState([])
    useEffect(() => {
        let newArr =[];
        const getFromLocalStorage = getShoppingCart();
        for (const id in getFromLocalStorage) {
            const appliedJob = jobs.filter(data => data.id == id)
            newArr.push(...appliedJob)
        }
        setAppliedData([...newArr])
    }, [])
    const handleRemoteJobs = () => {
        let newArr = [];
        const getFromLocalStorage = getShoppingCart();
        for (const id in getFromLocalStorage) {
            const appliedJob = jobs.filter(data => data.id == id)
            newArr.push(...appliedJob)
        }
        const filteredData = newArr.filter(e => e.remote_or_onsite === 'Remote')
        setAppliedData(filteredData)
    } 
    const handleOnsiteJobs = () => {
        let newArr = [];
        const getFromLocalStorage = getShoppingCart();
        for (const id in getFromLocalStorage) {
            const appliedJob = jobs.filter(data => data.id == id)
            newArr.push(...appliedJob)
        }
        const filteredData = newArr.filter(e => e.remote_or_onsite !== 'Remote')
        setAppliedData(filteredData)
    }
    return (
        <div className='mt-12 px-12 md:px-28'>
            <div className='flex justify-end '>
                <button onClick={handleRemoteJobs} className='common-btn px-8 py-2 mr-2'>Remote</button>
                <button onClick={handleOnsiteJobs} className='common-btn px-8 py-2'>Onsite</button>
            </div>
            <div>
                {
                    appliedData.map(data => <AppliedJob
                        key={data.id}
                        data={data}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;