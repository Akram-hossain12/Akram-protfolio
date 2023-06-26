import React from 'react';
import AbInformation from '../AboutInformation/AbInformation';
import MyInfo from '../Myinformation/MyInfo';
import MyTimeline from '../MyTimeLine/MyTimeline';

const About = () => {
    return (
        <div className=''>
            <AbInformation></AbInformation>
            <div className="divider divider-vertical"></div>

            <MyInfo></MyInfo>
            <MyTimeline></MyTimeline>
            
        </div>
    );
};

export default About;