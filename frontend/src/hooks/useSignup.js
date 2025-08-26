import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
    let navigate = useNavigate();
    let [loading, setLoading] = useState(false);

    const signup = async ({ username, email, password }) => {
        setLoading(true);
        try {
            if (!username && !email && !password) {
                return toast.error("Enter all the fields.");
            }

            let response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            let data = await response.json();

            if (data.error) {
                return toast.error(data.error);
            }

            if (data.success) {
                toast.success(data.success);
                navigate('/signin')
            }

        } catch (error) {
            console.log("error in signup", error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;
