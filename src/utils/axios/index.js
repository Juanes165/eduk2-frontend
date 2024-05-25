import axios from 'axios';
import { getCookie } from 'cookies-next';

// Axios instance to manage requests
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Interceptor, add token to request headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getCookie('token');

        if (token) {
            if (config.headers) config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response management, not modified
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;