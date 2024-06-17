import axiosInstance from "@/utils/axios";

export const addPoints = async (data) => {
    try {
        const response = await axiosInstance.post('users/v1/', data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};