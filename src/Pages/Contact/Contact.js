import React from 'react';
import { FaFacebook, FaLinkedin, FaLocationArrow, FaPhone, FaVoicemail, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-5xl font-bold'>CONTACT <span className='text-sky-500'>ME</span></h1>
            <div className="hero ">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left ml-12">
                        <h1 className="text-3xl font-bold mb-8">CONTACT ME HERE</h1>
                        <p className=" text-xl flex"><FaLocationArrow></FaLocationArrow><strong className='mx-3'>Location : </strong>Lakshmipur ,Bangladesh </p>
                        <p className=" text-xl flex my-6"><FaVoicemail></FaVoicemail><strong className='mx-3'>Email: </strong>akramhossain0502@gmail.com </p>
                        <p className=" text-xl flex"><FaPhone></FaPhone><strong className='mx-3'>Phone : </strong>+8801637655488 </p>

                        <ul className='flex mt-5 ml-10'>
                            <li className='p-4 bg-blue-200 text-black text-xl rounded-full'><Link> <FaYoutube></FaYoutube></Link></li>
                            <li className='p-4 mx-2 bg-blue-200 text-black text-xl rounded-full'><Link> <FaFacebook></FaFacebook></Link></li><li className='p-4 bg-blue-200 text-black text-xl rounded-full'><Link> <FaLinkedin></FaLinkedin></Link></li>
                        </ul>
                    </div>
                    <div className="card  w-1/2">
                        <div className="card-body">
                            <div className='grid grid-cols-2 gap-5'>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>

                            </div>
                     
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="enter subject" className="input input-bordered" />
                               
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;