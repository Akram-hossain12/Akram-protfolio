import React from 'react';
import './MyJob.css'

const MyJob = () => {
    return (
        <div className='myjob'>
            <div className="all">
                <div className="lefter">
                    <div className="text">Hosting</div>
                </div>
                <div className="left">
                    <div className="text">Web Design</div>
                </div>
                <div className="center">
                    <div className="explainer"><span>WORK</span></div>
                    <div className="text">Frontend Development</div>
                </div>
                <div className="right">
                    <div className="text">Backend Development</div>
                </div>
                <div className="righter">
                    <div className="text">SEO</div>
                </div>
            </div>

        </div>
    );
};

export default MyJob;