import React from 'react';

const AbInformation = () => {
    return (
        <div className='lg:mt-8 '>
            <h1 className='text-5xl mt-5 font-bold animate-pulse'>About <span className='text-blue-500'>Me</span></h1>
            <div className="hero  lg:mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=' ml-6'>

                        <div className="card hover:border-2 border-sky-500 delay-200 duration-200 ease-in">
                            <div className="p-3 pb-9">
                                <h2 className="card-title text-5xl text-blue-600 font-bold">50+</h2>
                                <p className='mt-4 text-3xl font-semibold'>PROJECTS
                                    <br /><span className='ml-16'>COMPLETED </span></p>

                            </div>
                        </div>
                        <div className="divider divider-vertical">OR</div>

                        <div className="card hover:border-2 mt-10 border-sky-500 delay-200 duration-200 ease-in">
                            <div className="p-3 pb-9">
                                <h2 className="card-title text-5xl text-blue-600 font-bold">2+</h2>
                                <p className='mt-4 text-3xl font-semibold'>YEARS OF <br /><span className='ml-16'> EXPERIENCE </span></p>

                            </div>
                        </div>

{/*                              
                        <div className="card hover:border-2 mt-10 border-sky-500 delay-200 duration-200 ease-in">
                            <div className="p-3 pb-9">
                                <h2 className="card-title text-5xl text-blue-600 font-bold">30+</h2>
                                <p className='mt-4 text-3xl font-semibold'>HAPPY OF <br /><span className='ml-16'> CLIENTS </span></p>

                            </div>
                        </div> */}
                    </div>

                   


                    <div className='lg:ml-8 lg:mr-8 mt-10 w-96'>
                        <h1 className="text-3xl font-bold">INFORMATION ABOUT <br /> ME</h1>
                        <p className="py-6">Hey There, I am a JavaScript developer with 2 years Experience. I made websites for professionally. I building websites for small and medium sized businesses. I am focusd on my work.
                            # I am experienced in HTML and CSS3 JavaScript ,ReactJS ,WordPress,MongoDB,Firebase also.
                            # I Will fully project manage your brief from start to finish.</p>
                        <button className="btn btn-primary">Hire me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbInformation;