'use client';
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useCookies } from "next-client-cookies";
import { parseJwt } from "@/utils";
import { getCoursesService } from "@/services";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const cookies = useCookies();
    
    const [user, setUser] = useState(null);
    const [courses, setCourses] = useState([]);
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
            getCoursesService()
            .then((courses) => {
                setCourses(courses);
            });
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
                courses,
                token,
                setToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext