import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card shrink-0 lg:w-[752px] w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                    <form className="card-body">
                        <div className="m-auto">
                            <h1>Login your account</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <Link>
                                <button className="btn w-full bg-black text-white rounded-none hover:bg-transparent hover:text-black">Login</button>
                            </Link>
                        </div>
                        <div className="m-auto">
                            <p>Dont’t Have An Account ? <span className="text-red-600"><Link to='/register'>Register</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;