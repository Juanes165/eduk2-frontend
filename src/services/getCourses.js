import axiosInstance from "@/utils/axios"

export default async function getCourses() {
    /*
        Fetches the courses data from the API
        Gets all the courses available for the user
        @returns {Promise} - The data from the API
    */
   
    return axiosInstance.get("subjects/enrollment/v1", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        console.log(response.data)
        return response.data
    }
    ).catch(error => {
        console.error(error.message)
        return []
    })
}