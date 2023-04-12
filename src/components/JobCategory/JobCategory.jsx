import React from 'react';

const JobCategory = ({ item }) => {
    const {img, name, jobsAvailable} = item
    return (
        <div className='common-bg px-9 py-5 rounded-lg'>
            <img className='mb-5' src={img} alt="" />
            <h4 className='text-lg font-bold mt-2'>{name}</h4>
            <p className='small-texts'>{jobsAvailable} Jobs Available</p>
        </div>
    );
};

export default JobCategory;