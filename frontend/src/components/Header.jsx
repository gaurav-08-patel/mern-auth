import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="min-w-screen bg-slate-200">
            <div className="  max-w-[1100px] mx-auto   px-1 flex justify-between py-4 items-center">
                <Link to="/">
                    <h1 className="font-bold text-2xl">Auth App</h1>
                </Link>

                <ul className="flex gap-8">
                    <li className="font-medium">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-medium">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="font-medium">
                        <Link to="/signin">Signin</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
