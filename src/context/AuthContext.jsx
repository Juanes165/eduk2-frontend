'use client';
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useCookies } from "next-client-cookies";
import { parseJwt } from "@/utils";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const cookies = useCookies();
    
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(
        () => cookies.get('token')
    );

    useEffect(() => {
        if (!token) {
            setUser(null);
            return;
        }
        try {
            const user = parseJwt(token).user;
            setUser(user);
        }
        catch (error) {
            console.log(error)
            cookies.remove('token');
        }
    }, [token]);

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                setToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext