import axiosInstance from "@/utils/axios";

export default async function createCommentService(comment) {
    try {
        const response = await axiosInstance.post('forum/comment/v1', comment)
        return response.data
    } catch (error) {
        return error
    }
}