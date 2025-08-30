import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { useAuthContext } from "./context/AuthContext";

function App() {
    let { authUser } = useAuthContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/signup"
                    element={authUser ? <Navigate to={"/"} /> : <Signup />}
                />
                <Route
                    path="/signin"
                    element={authUser ? <Navigate to={"/"} /> : <Signin />}
                />
                <Route path="/about" element={<About />} />
                <Route
                    path="/profile"
                    element={
                        authUser ? <Profile /> : <Navigate to={"/signin"} />
                    }
                />
            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={2999}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
            />
        </BrowserRouter>
    );
}

export default App;
