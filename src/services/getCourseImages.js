import axiosInstance from "@/utils/axios"

export default async function getCourseImages() {
    /*
        Fetches the course images data from the API
        Gets all the course images available
        @returns {Promise} - The data from the API
    */
    return axiosInstance.get("subjects/images/v1")
    .then((response) => {
        return response.data
    })
}