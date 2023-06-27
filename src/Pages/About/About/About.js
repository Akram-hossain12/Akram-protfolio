import React, { useEffect } from 'react';
import AbInformation from '../AboutInformation/AbInformation';
import MyInfo from '../Myinformation/MyInfo';
import MyTimeline from '../MyTimeLine/MyTimeline';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const About = () => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
    }
    const control = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }
    }, [control, inView]);
    return (
        <motion.div
            ref={ref}
            variants={boxVariant}
            initial='visible'
            animate={control}
            className=''>
            <AbInformation


            ></AbInformation>
            <div className="divider divider-vertical"></div>

            <MyInfo


            ></MyInfo>
            <MyTimeline


            ></MyTimeline>

        </motion.div>
    );
};

export default About;