import { useState } from "react";
import { toast } from "react-toastify";


const useSignin = () => {
   
    let [loading, setLoading] = useState(false);

    const signin = async ({ email, password }) => {
        setLoading(true);
        try {
            if (!email && !password) {
                return toast.error("Enter all the fields.");
            }

            let response = await fetch("/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            let data = await response.json();

            if (data.error) {
                return toast.error(data.error);
            }

            

        } catch (error) {
            console.log("error in signin", error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signin };
};

export default useSignin;
