import axiosInstance from "@/utils/axios";

export default async function deleteComment(id) {
    try {
        const response = await axiosInstance.delete(`forum/comment/v1${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}