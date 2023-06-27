import React from 'react';
import img1 from '../../../assets/eduit.png'
import img2 from '../../../assets/Screens_Assgenment2.png'
import img3 from '../../../assets/Assgenment4.png'
import img4 from '../../../assets/upookul.png'
import img5 from '../../../assets/port2.jpg'
import img6 from '../../../assets/port5.jpg'
import img8 from '../../../assets/port6.jpg'
import img7 from '../../../assets/port7.jpg'
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';





const MyWork = () => {

    return (
        <div className='mt-14 mb-10 ml-8'>
            
            <div>
                <div className='absolute opacity-20 text-[70px] left-1/2 -mt-20 font-bold'>
                    <h2 className='-mb-5'>MY </h2>
                    <sapn className="">WORK</sapn>
                </div>
                <h1 className='text-3xl ml-20 text-lime-500 font-bold relative'>MY PROTFOLIO</h1>
            </div>
            <p className='mt-10 ml-14 text-lg'>Here is some of my work that I've done in various programming languages.</p>

             <div>
            
             </div>
            <div className='lg:grid lg:grid-cols-3 gap-5 mt-24'>

                <div className='flex relative border-b-8 w-96  border-lime-500 rounded-md'>
                    <img src={img2} className='w-96 h-60' alt="" />
                    <div className='w-96 h-60 bg-lime-500 absolute opacity-0 hover:opacity-90 hover:ease-in hover:delay-150 duration-150 '>
                        <h1 className='text-black text-3xl font-bold mt-5'>Source</h1>
                        <div className='flex justify-center items-center mt-5'>
                            <Link to='https://github.com/Akram-hossain12' className='p-5 bg-slate-300 text-black text-3xl rounded-full mr-6'>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link to='https://akram-hossain12.github.io/assginment-two-world-cup/secduel.html' className='p-5 bg-slate-300 text-black text-3xl rounded-full'>
                                <FaLink></FaLink>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className='flex relative border-b-8 w-96 border-lime-500 rounded-md'>
                    <img src={img1} className='w-96 h-60' alt="" />
                    <div className='w-96 h-60 bg-lime-500 absolute opacity-0 hover:opacity-90 hover:ease-in hover:delay-150 duration-150 '>
                        <h1 className='text-black text-3xl font-bold mt-5'>Source</h1>
                        <div className='flex justify-center items-center mt-5'>
                            <Link to='https://github.com/Akram-hossain12' className='p-5 bg-slate-300 text-black text-3xl rounded-full mr-6'>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link to='https://news-dragon-2eeac.web.app/' className='p-5 bg-slate-300 text-black text-3xl rounded-full'>
                                <FaLink></FaLink>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className='flex relative border-b-8 w-96 border-lime-500 rounded-md'>
                    <img src={img3} className='w-96 h-60' alt="" />
                    <div className='w-96 h-60 bg-lime-500 absolute opacity-0 hover:opacity-90 hover:ease-in hover:delay-150 duration-150 '>
                        <h1 className='text-black text-3xl font-bold mt-5'>Source</h1>
                        <div className='flex justify-center items-center mt-5'>
                            <Link to='https://github.com/Akram-hossain12' className='p-5 bg-slate-300 text-black text-3xl rounded-full mr-6'>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link to='https://akram-hossain12.github.io/edutech-websit-assginment/?' className='p-5 bg-slate-300 text-black text-3xl rounded-full'>
                                <FaLink></FaLink>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className='flex relative border-b-8 w-96 border-lime-500 rounded-md'>
                    <img src={img4} className='w-96 h-60' alt="" />
                    <div className='w-96 h-60 bg-lime-500 absolute opacity-0 hover:opacity-90 hover:ease-in hover:delay-150 duration-150 '>
                        <h1 className='text-black text-3xl font-bold mt-5'>Source</h1>
                        <div className='flex justify-center items-center mt-5'>
                            <Link to='https://github.com/Akram-hossain12' className='p-5 bg-slate-300 text-black text-3xl rounded-full mr-6'>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link to='' className='p-5 bg-slate-300 text-black text-3xl rounded-full'>
                                <FaLink></FaLink>
                            </Link>

                        </div>
                    </div>
                </div>


                <div className='flex relative border-b-8 w-96 border-lime-500 rounded-md'>
                    <img src={img5} className='w-96 h-60' alt="" />
                    <div className='w-96 h-60 bg-lime-500 absolute opacity-0 hover:opacity-90 hover:ease-in hover:delay-150 duration-150 '>
                        <h1 className='text-black text-3xl font-bold mt-5'>Source</h1>
                        <div className='flex justify-center items-center mt-5'>
                            <Link to='https://github.com/Akram-hossain12' className='p-5 bg-slate-300 text-black text-3xl rounded-full mr-6'>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link to='' className='p-5 bg-slate-300 text-black text-3xl rounded-full'>
                                <FaLink></FaLink>
                            </Link>

                        </div>
                    </div>
                </div>


                <div className='flex relative border-b-8 w-96 border-lime-500 rounded-md'>
                    <img src={img6} className='w-96 h-60' alt="" />
                    <div className='w-96 h-60 bg-lime-500 absolute opacity-0 hover:opacity-90 hover:ease-in hover:delay-150 duration-150 '>
                        <h1 className='text-black text-3xl font-bold mt-5'>Source</h1>
                        <div className='flex justify-center items-center mt-5'>
                            <Link to='https://github.com/Akram-hossain12' className='p-5 bg-slate-300 text-black text-3xl rounded-full mr-6'>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link to='' className='p-5 bg-slate-300 text-black text-3xl rounded-full'>
                                <FaLink></FaLink>
                            </Link>

                        </div>
                    </div>
                </div>


                <div className='flex relative border-b-8 w-96 border-lime-500 rounded-md'>
                    <img src={img7} className='w-96 h-60' alt="" />
                    <div className='w-96 h-60 bg-lime-500 absolute opacity-0 hover:opacity-90 hover:ease-in hover:delay-150 duration-150 '>
                        <h1 className='text-black text-3xl font-bold mt-5'>Source</h1>
                        <div className='flex justify-center items-center mt-5'>
                            <Link to='https://github.com/Akram-hossain12' className='p-5 bg-slate-300 text-black text-3xl rounded-full mr-6'>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link to='' className='p-5 bg-slate-300 text-black text-3xl rounded-full'>
                                <FaLink></FaLink>
                            </Link>

                        </div>
                    </div>
                </div>


                <div className='flex relative border-b-8 w-96 border-lime-500 rounded-md'>
                    <img src={img8} className='w-96 h-60' alt="" />
                    <div className='w-96 h-60 bg-lime-500 absolute opacity-0 hover:opacity-90 hover:ease-in hover:delay-150 duration-150 '>
                        <h1 className='text-black text-3xl font-bold mt-5'>Source</h1>
                        <div className='flex justify-center items-center mt-5'>
                            <Link to='https://github.com/Akram-hossain12' className='p-5 bg-slate-300 text-black text-3xl rounded-full mr-6'>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link to='' className='p-5 bg-slate-300 text-black text-3xl rounded-full'>
                                <FaLink></FaLink>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyWork;