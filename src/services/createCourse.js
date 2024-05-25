import axiosInstance from "@/utils/axios";

export default async function createCourse(data) {
    /*
        Fetches the create course data to the API
        @param {Object} data - The data to be sent to the API
        @returns {Promise} - The data from the API
    */
    return axiosInstance.post("subjects/v1", data)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
}