import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="max-w-[1100px] mx-auto min-h-[calc(100vh-64px)] p-1">{children}</div>
        </div>
    );
};

export default Layout;
