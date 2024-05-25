import axiosInstance from "@/utils/axios"

export default async function getCourses() {
    return axiosInstance.get("subjects/enrollment/v1", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.data
    }
    ).catch(error => {
        console.error(error.message)
        return []
    })
}