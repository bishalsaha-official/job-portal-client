import Lottie from "lottie-react";
import registerLottieData from "../../../public/Login_Animation.json"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext)
    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // signInUser
        signInUser(email, password)
            .then(result => {
                console.log("sign in", result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl min-w-6/12">
                    <h1 className="text-2xl font-bold text-center mb-5">Login Now</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>
                    <p className="text-center py-5">Don't Have an Account? <Link className="text-primary" to="/register">Register</Link></p>
                </div>
                <div className="text-center min-w-96">
                    <Lottie animationData={registerLottieData} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default SignIn;

