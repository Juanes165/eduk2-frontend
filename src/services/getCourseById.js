import axiosInstance from "@/utils/axios"

export default async function getCourseById(id) {
    /*
        Fetches the course data from the API
        Gets the course content by id
        @param {String} id - The id of the course
        @returns {Promise} - The data from the API
    */
   
    return axiosInstance.get("subjects/v1/" + id, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => {
        return response.data
    }
    ).catch(error => {
        console.log(error)
    })
}