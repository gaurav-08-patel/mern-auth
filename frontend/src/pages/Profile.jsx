import Layout from "../components/Layout";
import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
    let { authUser } = useAuthContext();
    return (
        <Layout>
            <div className="mt-2.5 mx-auto  max-w-lg">
                <h1 className="font-semibold text-2xl text-center tracking-[4px]">
                    Profile
                </h1>
                <form className="flex flex-col items-center mt-2.5 p-1 gap-2">
                    <div>
                        <img
                            src={authUser.profilePicture}
                            alt="profile picture"
                            className="h-20 rounded-full object-cover"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-slate-200 p-2.5 rounded-lg w-full"
                        defaultValue={authUser.username}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-slate-200 p-2.5 rounded-lg w-full"
                        defaultValue={authUser.email}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-slate-200 p-2.5 rounded-lg w-full"
                    />

                    <button className="w-full disabled:opacity-85 hover:opacity-85 transition-all bg-slate-600 text-white p-2.5 rounded-lg cursor-pointer">
                        UPDATE
                    </button>
                </form>
                <div className="flex justify-between mt-2">
                  <span className="text-red-600 text-sm">
                    Delete Account
                  </span>
                  <span className="text-red-600 text-sm">
                    Sign out
                  </span>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
