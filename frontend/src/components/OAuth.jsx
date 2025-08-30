import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useAuthContext } from "../context/AuthContext";

const OAuth = () => {
    let { setAuthUser } = useAuthContext();

    let handleGoogleAuth = async () => {
        let provider = new GoogleAuthProvider();
        let auth = getAuth(app);
        try {
            let result = await signInWithPopup(auth, provider);
            console.log(result);

            let res = await fetch("api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    profilePicture: result.user.photoURL,
                }),
            });

            let data = await res.json();

            localStorage.setItem("user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            console.log("error in oauth " + error.message);
        }
    };

    return (
        <button
            onClick={handleGoogleAuth}
            type="button"
            className="disabled:opacity-85 hover:opacity-85 transition-all bg-red-700 text-white p-2.5 rounded-lg cursor-pointer"
        >
            Continue With Google
        </button>
    );
};

export default OAuth;
