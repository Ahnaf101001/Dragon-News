import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Header from "../Shared/Header/Header";

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log("location in the login page = ", location);

    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        // console.log(form.get('password'));
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.use);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card shrink-0 lg:w-[752px] w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form onSubmit={handleLogin} className="card-body mt-[76px]">
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
                                <button type="submit" className="btn w-full bg-black text-white rounded-none hover:bg-transparent hover:text-black">Login</button>
                            </div>
                        </form>
                        <div className="m-auto mb-[76px]">
                            <p>Dont’t Have An Account ? <span className="text-red-600"><Link to='/register'>Register</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;