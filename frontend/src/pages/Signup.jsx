import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <Layout>
            <div>
                <h1 className="font-semibold text-center text-2xl my-4 tracking-[2px]">
                    Sign Up
                </h1>
                <form className="flex flex-col gap-3 p-1 max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-slate-200 p-2.5 rounded-lg"
                        id="username"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-slate-200 p-2.5 rounded-lg"
                        id="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-slate-200 p-2.5 rounded-lg"
                        id="password"
                    />

                    <button className=" bg-slate-600 text-white p-2.5 rounded-lg cursor-pointer">
                        SIGN UP{" "}
                    </button>
                    <span className="text-sm">
                        Have an account ?{" "}
                        <Link to="/signin" className="text-blue-500">
                            Sign in
                        </Link>
                    </span>
                </form>
            </div>
        </Layout>
    );
};

export default Signup;
