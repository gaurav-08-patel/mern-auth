import { createContext, useState, useContext } from "react";

export let authContext = createContext({});

export let AuthContextProvider = ({ children }) => {
    let [authUser, setAuthUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    return (
        <authContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(authContext);
};
