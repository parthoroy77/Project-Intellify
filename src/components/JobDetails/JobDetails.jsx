import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import { BeakerIcon, CalendarIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../utilities/fakedb';



const JobDetails = () => {
    const [job, setJob] = useState(useLoaderData())
    const { job_description,id, job_title, salary, job_responsibility, educational_requirements, experiences } = job;
    const handleApplyNow = (id) => addToDb(id);
    return (
        <div className='flex flex-col h-full md:flex-row w-full px-12 md:px-28 my-16'>
            <div className='md:w-3/5 left-side p-4'>
                <p className=' text-sm md:text-xl mb-7'><span className='font-bold text-lg md:text-2xl'>Job Description:</span> <span className='small-texts'>{job_description}</span></p>
                <p className=' text-sm md:text-xl mb-7'><span className='font-bold text-lg md:text-2xl'>Job Responsibility:</span> <span className='small-texts'>{job_responsibility}</span></p>
                <h4>Educational Requirements:</h4>
                <p className='small-texts'>
                    {educational_requirements}
                </p>
                <h4>
                    Experience:
                </h4>
                <p className='small-texts'>
                    {experiences}
                </p>
            </div>
            <div className='md:w-2/5 right-side px-10 py-6 '>
                <h3 className='text-xl font-bold'>Job Details</h3>
                <hr className='my-5 border'/>
                <p className='my-5'>
                    <CurrencyDollarIcon className="h-5 w-5 inline text-blue-500" />
                    <span className='mx-2 font-bold'>Salary:</span>
                    {salary}
                </p>
                <p className='my-5'>
                    <CalendarIcon className="h-5 w-5 inline text-blue-500" />
                    <span className='mx-2 font-bold'>Job Title:</span>
                    {job_title}
                </p>
                <h3 className='text-xl font-bold'>Contact Information</h3>
                <hr className='my-5 border' />
                <p className='my-5'>
                    <PhoneIcon className="h-5 w-5 inline text-blue-500" />
                    <span className='mx-2 font-bold'>Phone:</span>
                    {job_title}
                </p><p className='my-5'>
                    <EnvelopeIcon className="h-5 w-5 inline text-blue-500" />
                    <span className='mx-2 font-bold'>Email:</span>
                    {job_title}
                </p><p className='my-5'>
                    <MapPinIcon className="h-5 w-5 inline text-blue-500" />
                    <span className='mx-2 font-bold'>Location:</span>
                    {job_title}
                </p>
                <button onClick={()=>handleApplyNow(id)} className='common-btn w-full py-3'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;