import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const NavTop = () => {
    const {user,logOutUser }=useContext(AuthContext)
    console.log(user)
    const hendelLogout = ()=>{
        logOutUser().then().catch(err=>console.error(err))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Akram.DEV</Link>
                </div>
                <div className="flex-none">
                    {user?.uid ?  
                         <div className="dropdown dropdown-end">
                         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                             <div className="w-10 rounded-full">
                                 <img src={user?.photoURL} alt=''/>
                             </div>
                         </label>
                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                             <li>
                                 <Link className="">Deshbord</Link>
                             </li>
                          
                             <li><Link onClick={hendelLogout}>Logout</Link></li>
                         </ul>
                     </div>
                     :
                     <ul className="menu menu-horizontal px-1">
                        <li className='font-bold '><Link to='/login'>LogIn</Link></li>
                        <li className='bg-blue-600 ml-5 font-bold rounded-lg'><Link to='/sginup'>SignUp</Link></li>

                    </ul>

                    }
                  
                </div>

           

            </div>
        </div>
    );
};

export default NavTop;