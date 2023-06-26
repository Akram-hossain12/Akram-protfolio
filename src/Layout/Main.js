import React from 'react';
import Navbar from '../Pages/Shaerd/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='lg:flex md:flex lg:w-[1300px] lg:mx-auto md:w-[700px] md:mx-auto'>
            <Navbar></Navbar>
            <div className='flex-1'>

                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;