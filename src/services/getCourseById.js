import axiosInstance from "@/utils/axios"

export default async function getCourseById(id) {
    console.log('xd')
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