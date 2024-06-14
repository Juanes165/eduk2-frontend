import axiosInstance from "@/utils/axios";

export default async function getSummaryForums() {
    try {
        const response = await axiosInstance.get("forum/summary/v1");
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}