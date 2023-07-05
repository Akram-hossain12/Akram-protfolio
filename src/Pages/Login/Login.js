
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { LoginUser, } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    console.log(loginError)
    const from = location.state?.from?.pathname || '/';
    const hendelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LoginUser(email, password).then(result => {
            const user = result.user;
            console.log(user)
            setLoginError('')
            toast.success(`Login success ${user?.displayName}`)
            navigate(from, { replace: true });
        })
            .catch(err => {
                setLoginError(err)
                console.error(err)
            })

    }
    return (


        <div>

            <div className="hero mt-24">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login <span className='text-sky-500'>now!</span></h1>

                    </div>
                    <div className="card w-96 shadow-2xl bg-base-100 mt-9 ">
                        <form onSubmit={hendelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <p>Don't have an account? <Link to='/sginup' href="#" className="label-text-alt link link-hover">SginUp</Link></p>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Login' className="btn btn-primary"></input>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Login;