import React from 'react';
import { Link } from 'react-router-dom';
import {  FaBriefcase, FaEnvelope, FaHome,  FaNewspaper,  FaUser} from 'react-icons/fa';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className=' text-2xl'><Link to="/"><FaHome></FaHome></Link></li>
        <li className='text-2xl lg:my-5'><Link to="/about"><FaUser></FaUser></Link></li>
        <li className='text-2xl'><Link to="/work"><FaBriefcase></FaBriefcase></Link></li>
        <li className='text-2xl lg:my-5'><Link to="blogs"><FaNewspaper></FaNewspaper></Link></li>
        <li className='text-2xl'><Link to="/contact"><FaEnvelope></FaEnvelope></Link></li>

    </React.Fragment>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu lg:mt-40 px-1">
                       {menuItems}
                    </ul>
                </div>
           
            </div>
        </div>
    );
};

export default Navbar;