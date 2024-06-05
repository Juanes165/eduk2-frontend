import axiosInstance from "@/utils/axios";

export default async function getForumsService() {
    try {
        const response = await axiosInstance.get(`forum/v1`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}