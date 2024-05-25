import axios from "axios"

const apiURL = process.env.NEXT_PUBLIC_API_URL

import axios from "axios"

export async function fetchLogin(data) {
    /*
        Fetches the login data to the API
        @param {Object} data - The data to be sent to the API
        @returns {Promise} - The data from the API
    */ 
    const response = await fetch(apiURL + "auth/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const data_1 = await response.json()
    if (data_1.error) {
        throw new Error(data_1.error)
    }
    return data_1
}

export async function fetchSignUp(data) {
    /*
        Fetches the signup data to the API
        @param {Object} data - The data to be sent to the API
        @returns {Promise} - The data from the API
    */
    const response = await fetch(apiURL + "auth/v1/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const data_1 = await response.json()
    if (data_1.error) {
        throw new Error(data_1.error)
    }
    return data_1
}


export async function fetchCourseImagesOptions() {
    /*
        Fetches the course images data from the API
        Gets all the course images available
        @returns {Promise} - The data from the API
    */
    return axios.get(apiURL + "subjects/images/v1")
    .then((response) => {
        console.log(response.data)
        return response.data
    })
}

export async function fetchCreateCourse(data) {
    /*
        Fetches the create course data to the API
        @param {Object} data - The data to be sent to the API
        @returns {Promise} - The data from the API
    */
    return axios.post(apiURL + "subjects/v1", data)
    .then((response) => {
        console.log(response.status);
    })
    .catch((error) => {
        console.log(error);
    });
}