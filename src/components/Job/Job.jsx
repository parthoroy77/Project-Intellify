import React from 'react';
import './Job.css'
import { CurrencyDollarIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {
        id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = job
    return (
        <div className='job flex flex-col justify-between'>
            <div>
                <img src={company_logo} className='w-20 mb-5' alt="" />
                <h4 className='text-lg font-semibold'>{job_title}</h4>
                <p className="small-texts text-lg">{company_name}</p>
                <div className='my-3'>
                    <button className='remote-fulltime-btn'>{remote_or_onsite}</button>
                    <button className='remote-fulltime-btn'>{fulltime_or_parttime}</button>
                </div>
                <div className='my-2 small-texts text-md'>
                    <p className='text'>
                        <span className='mr-2'><MapPinIcon className="h-4 w-4 text-slate-700-300 inline"></MapPinIcon> {location}</span>
                        <span>
                            <CurrencyDollarIcon className="h-4 w-4 text-slate-700 inline"></CurrencyDollarIcon> {salary}
                        </span>
                    </p>
                </div>
            </div>
            <Link to={`/jobdetails/${id}`}>
                <button className='common-btn px-5 py-2' style={{ width: '157px' }}>View Details</button>
            </Link>
        </div>
    );
};

export default Job;