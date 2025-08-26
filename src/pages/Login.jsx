import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const {signInUser, loading} = useContext(AuthContext); // get signInUser from context
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault(); //? to prevent page reload
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // sign in user
        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log("🚀 ~ handleLogin ~ loggedInUser:", loggedInUser);
                form.reset(); //? reset the form after submission
                navigate('/'); //? redirect to home page after login
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="container w-96 mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Login Now!</h2>
            <hr />
            <form onSubmit={handleLogin} className="mt-4">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name="password" type="password" className="input w-full" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary mt-4">Login</button>
                </fieldset>
                <p>Don't have account? Please <span><Link className="text-primary" to='/register'>Register</Link></span></p>
            </form>
        </div>
    );
};

export default Login;