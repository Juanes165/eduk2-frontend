import axiosInstance from "@/utils/axios";

export default async function getForumById(id) {
    return axiosInstance.get("forum/v1/" + id, {
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