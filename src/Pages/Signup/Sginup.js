import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Sginup = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const hendelSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(photo)

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                const userInfo = {
                    displayName: name,
                    photoURL:photo
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.error(err))
                toast.success('SginUp Successfully')
                form.reset()
                navigate('/')
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <div className="hero lg:mt-10">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please ,SignUp now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mt-9">
                        <form onSubmit={hendelSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input name='photo' type="text" placeholder="Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p>Already have an account? <Link to='/login' href="#" className="label-text-alt link link-hover">Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='sginup' className="btn btn-primary"></input>
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

export default Sginup;