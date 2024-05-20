import { AuthContext } from "@/context/AuthContext";
import { useContext, useCallback, useState } from "react";
import { signInService } from "@/services";
import { parseJwt } from "@/utils";
import { useCookies } from "next-client-cookies";

export const useAuth = () => {
    const { token, setToken, user } = useContext(AuthContext);
    const [ status, setStatus ] = useState({ loading: false, error: null });

    const cookies = useCookies();

    const signIn = useCallback(async (email, password) => {
        setStatus({ loading: true, error: null });
        try {
            const { token } = await signInService(email, password);
            cookies.set('token', token, { path: '/', sameSite: 'Lax' });
            setToken(token);
            setStatus({ loading: false, error: null });
        } catch (error) {
            setStatus({ loading: false, error: error.message });
            console.log(error)
        }
    }, [setToken]);

    const signInWithGoogle = useCallback(() => {
        window.location.href = process.env.NEXT_PUBLIC_API_URL + "oauth/google";
    }, []);

    const signOut = useCallback(() => {
        cookies.remove('token');
        setToken(null);
    }, [setToken]);

    return {
        ...user,
        isLogged: Boolean(token),
        isLoading: status.loading,
        hasError: status.error,
        signIn,
        signInWithGoogle,
        signOut,
    };
};