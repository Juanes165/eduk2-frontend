import axiosInstance from "@/utils/axios";

export default function createContent(formData) {

    return axiosInstance.post("contents/v1", formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => console.log(error));
}