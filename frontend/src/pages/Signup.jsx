import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
    let { loading, signup } = useSignup();
    let [formData, setFormData] = useState({});

    let handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        await signup(formData);
    };

    return (
        <Layout>
            <div>
                <h1 className="font-semibold text-center text-2xl my-4 tracking-[2px]">
                    Sign Up
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 p-1 max-w-lg mx-auto"
                >
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-slate-200 p-2.5 rounded-lg"
                        id="username"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-slate-200 p-2.5 rounded-lg"
                        id="email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-slate-200 p-2.5 rounded-lg"
                        id="password"
                        onChange={handleChange}
                    />

                    <button className="disabled:opacity-85 hover:opacity-85 transition-all bg-slate-600 text-white p-2.5 rounded-lg cursor-pointer" disabled={loading} >
                        {loading ? (
                            <span class="loading loading-dots loading-lg"></span>
                        ) : (
                            "SIGN UP"
                        )}
                    </button>
                    <span className="text-sm font-medium">
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
