import React from 'react';
import img from '../../../assets/Akram.jpg'
import { FaDownload } from 'react-icons/fa';

const Banner = () => {
        // Function will execute on click of button
        const onButtonClick = () => {
            // using Java Script method to get PDF file
            fetch('Resume_removed.pdf').then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'Resume_removed.pdf';
                    alink.click();
                })
            })
        }
    return (
        <div>
            <div className="hero lg:mt-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt='' className="animate-pulse -rotate-6 max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">
                            Hi, I'm <br /><span className='text-blue-500 my-2  '>Akram Hossain.</span> <br />Front End developer</h1>
                        <p className="py-6 lg:ml-5 lg:mr-5 text-xl">Hey There, I am a JavaScript developer with 2 years Experience. I made websites for professionally. I building websites for small and medium sized businesses. I am focusd on my work.
                            # I am experienced in HTML and CSS3 JavaScript ,ReactJS ,WordPress,MongoDB,Firebase also.
                            # I Will fully project manage your brief from start to finish.</p>
                        <button onClick={onButtonClick} className="btn btn-primary ">Download Cv <FaDownload></FaDownload></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;