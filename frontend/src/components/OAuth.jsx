import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";

const OAuth = () => {
    let handleGoogleAuth = async () => {
        let provider = new GoogleAuthProvider();
        let auth = getAuth(app);

        let result = await signInWithPopup(auth, provider);
        console.log(result);
        
        try {
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
