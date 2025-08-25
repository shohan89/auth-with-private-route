import { Link } from "react-router";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault(); //? to prevent page reload
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="container w-96 mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Register Now!</h2>
            <hr />
            <form onSubmit={handleRegister} className="mt-4">
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input w-full" placeholder="Name" />
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name="password" type="password" className="input w-full" placeholder="Password" />
                    <button className="btn btn-primary mt-4">Login</button>
                </fieldset>
                <p>Already have account? Please <span><Link className="text-primary" to='/login'>Login</Link></span></p>
            </form>
        </div>
    );
};

export default Register;