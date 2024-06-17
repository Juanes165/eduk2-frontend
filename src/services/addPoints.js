import axiosInstance from "@/utils/axios";

export default function addPoints(data) {
    return axiosInstance.post('users/v1/', data)
        .then(response => {
            return response.data
        }).catch(error => {
            console.log(error)
        })
}