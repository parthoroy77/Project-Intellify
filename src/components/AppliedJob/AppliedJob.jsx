import React from 'react';
import './AppliedJob.css'
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const AppliedJob = ({ data, handleOnsiteJobs, handleRemoteJobs }) => {
    const { fulltime_or_parttime, location, remote_or_onsite, company_logo, id, job_title, salary, company_name } = data;
    return (
        <div className='applied-job-container my-3 flex gap-3 items-center'>
            <div className='h-36 w-36 flex justify-center items-center' style={{
                background: '#F4F4F4',
                borderRadius: '8px'}}>
                <img src={company_logo} className='w-28' alt="" />
            </div>
            <div className='flex-grow'>
                <h3 className='text-lg font-bold'>{job_title}</h3>
                <p className='small-texts'>
                    {company_name}
                </p>
                <div>
                    <div className='my-3'>
                        <button className='remote-fulltime-btn'>{remote_or_onsite}</button>
                        <button className='remote-fulltime-btn'>{fulltime_or_parttime}</button>
                    </div>
                    <div>
                        <div className='my-2 small-texts text-md'>
                            <p className=''>
                                <span className='mr-2'><MapPinIcon className="h-4 w-4 text-slate-700-300 inline"></MapPinIcon> {location}</span>
                                <span>
                                    <CurrencyDollarIcon className="h-4 w-4 text-slate-700 inline"></CurrencyDollarIcon> {salary}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/jobdetails/${id}`}><button className='common-btn px-4 py-2'>View Details</button></Link>
        </div>
    );
};

export default AppliedJob;