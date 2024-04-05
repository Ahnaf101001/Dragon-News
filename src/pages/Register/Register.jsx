import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form);
        // console.log(form.get('name'));
        // console.log(form.get('pic'));
        // console.log(form.get('email'));
        // console.log(form.get('password'));
        const name = form.get('name');
        const picUrl = form.get('pic');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, picUrl, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card shrink-0 lg:w-[752px] w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="m-auto">
                                <h1>Register your account</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="pic" type="url" placeholder="Enter your photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn w-full bg-black text-white rounded-none hover:bg-transparent hover:text-black">Register</button>
                            </div>
                        </form>
                        <div className="m-auto mb-[76px]">
                            <p>Already Have An Account ? <span className="text-red-600"><Link to='/login'>Login</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
