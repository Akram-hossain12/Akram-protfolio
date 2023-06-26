import React from 'react';
import { FaBriefcase } from 'react-icons/fa';


const MyTimeline = () => {
    return (
        <div className='mb-10'>
            <h1>MY TIMELINE</h1>
            <div className='lg:grid lg:grid-cols-2 mt-10 gap-5 lg:ml-10'>
                <div className="card card-side w-96">
                    <span className='text-4xl mt-5'><FaBriefcase></FaBriefcase></span>
                    <div className="card-body">
                        <p className='btn btn-sm'>2019 - Present</p>
                        <h2 className="card-title">Front End developer </h2>
                        
                    </div>
                </div>

                <div className="card card-side w-96">
                    <span className='text-4xl mt-5'>  <FaBriefcase></FaBriefcase></span>
                    <div className="card-body">
                        <p className='btn btn-sm'>2019 - Present</p>
                        <h2 className="card-title">Work in BackEnd </h2>
                    </div>
                </div>
                
                <div className="card card-side w-96">
                    <span className='text-4xl mt-5'> <FaBriefcase></FaBriefcase></span>
                    <div className="card-body">
                        <p className='btn btn-sm'>2018 - 2020</p>
                        <h2 className="card-title">Teacher</h2>

                    </div>
                </div>

                
                <div className="card card-side w-96">
                    <span className='text-4xl mt-5'>  <FaBriefcase></FaBriefcase></span>
                    <div className="card-body">
                        <p className='btn btn-sm'>2017 - 2018</p>
                        <h2 className="card-title">Wordprss developer</h2>
                        <p></p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyTimeline;