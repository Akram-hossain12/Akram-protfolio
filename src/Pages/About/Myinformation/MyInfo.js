import React from 'react';

const MyInfo = () => {
    return (
        <div className='mb-16'>
            <h1 className='text-3xl font-bold mt-16'>MY SKILLS</h1>
            <div className='mt-16'>
                <div className='lg:grid lg:grid-cols-2'>
                    <div className='mt-5'>
                        <p >HTML5</p>
                        <label className='mr-5'>90%</label>
                        <progress className="progress progress-primary w-96" value='90' max="100"></progress>
                    </div>

                    <div className='mt-5'>
                        <p >CSS3</p>
                        <label className='mr-5'>80%</label>
                        <progress className="progress progress-primary w-96" value='80' max="100"></progress>
                    </div>

                    <div className='mt-5'>
                        <p >JavaScript</p>
                        <label className='mr-5'>60%</label>
                        <progress className="progress progress-primary w-96" value='60' max="100"></progress>
                    </div>

                    <div className='mt-5'>
                        <p >ES6</p>
                        <label className='mr-5'>70%</label>
                        <progress className="progress progress-primary w-96" value='70' max="100"></progress>
                    </div>

                    <div className='mt-5'>
                        <p >Bootstrap</p>
                        <label className='mr-5'>90%</label>
                        <progress className="progress progress-primary w-96" value='90' max="100"></progress>
                    </div>

                    <div className='mt-5'>
                        <p >Tailwiend</p>
                        <label className='mr-5'>70%</label>
                        <progress className="progress progress-primary w-96" value='70' max="100"></progress>
                    </div>

                    <div className='mt-5'>
                        <p >ReactJS</p>
                        <label className='mr-5'>80%</label>
                        <progress className="progress progress-primary w-96" value='80' max="100"></progress>
                    </div>

                    <div className='mt-5'>
                        <p >NodeJs</p>
                        <label className='mr-5'>70%</label>
                        <progress className="progress progress-primary w-96" value='70' max="100"></progress>
                    </div>

                    
                    <div className='mt-5'>
                        <p >MongoDB</p>
                        <label className='mr-5'>90%</label>
                        <progress className="progress progress-primary w-96" value='90' max="100"></progress>
                    </div>

                    
                    <div className='mt-5'>
                        <p >Firebase</p>
                        <label className='mr-5'>80%</label>
                        <progress className="progress progress-primary w-96" value='80' max="100"></progress>
                    </div>
                
                </div>

            </div>

        </div>
    );
};

export default MyInfo;