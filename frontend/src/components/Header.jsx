import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
    let { authUser } = useAuthContext();
    return (
        <header className="w-full bg-slate-200">
            <div className="  max-w-[1100px] mx-auto   px-1 flex justify-between py-4 items-center">
                <Link to="/">
                    <h1 className="font-bold text-2xl">Auth App</h1>
                </Link>

                <ul className="flex gap-8 items-center pr-1">
                    <li className="font-medium">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-medium">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="font-medium">
                        {!authUser ? (
                            <Link to="/signin">Sign In</Link>
                        ) : (
                            <Link to={"/profile"}>
                                <img className="h-10 rounded-full object-cover"
                                    src={authUser.profilePicture}
                                    alt="profile picture"
                                />
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
