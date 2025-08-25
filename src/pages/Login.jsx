import { Link } from "react-router";

const Login = () => {
    return (
        <div className="container w-96 mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Login Now!</h2>
            <hr />
            <div className="mt-4">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary mt-4">Login</button>
                </fieldset>
                <p>Don't have account? Please <span><Link className="text-primary" to='/register'>Register</Link></span></p>
            </div>
        </div>
    );
};

export default Login;