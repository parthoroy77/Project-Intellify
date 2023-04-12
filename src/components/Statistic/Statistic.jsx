import React from 'react';
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';



const Statistic = () => {
    const assignmentData = [
        { name: 'a-1', result: 60 },
        { name: 'a-2', result: 60 },
        { name: 'a-3', result: 60 },
        { name: 'a-4', result: 60 },
        { name: 'a-5', result: 55 },
        { name: 'a-6', result: 60 },
        { name: 'a-7', result: 60 },
        { name: 'a-8', result: 60 },
    ]
    return (
        <div className=' flex justify-center items-center' style={{height: '400px', width: '100%'}}>
            <div>
                <h1 className='text-4xl fond-bold text-center mb-4'> 
                    Radar Chart
                </h1>

                    <RadarChart
                        width={400} height={250} cx="50%" cy="50%" outerRadius="80%" data={assignmentData}>
                        <PolarGrid />
                        <Tooltip></Tooltip>
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="result" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
            </div>
        </div>
    );
};

export default Statistic;