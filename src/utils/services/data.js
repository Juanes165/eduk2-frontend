import axios from "axios"

const apiURL = process.env.NEXT_PUBLIC_API_URL

export async function fetchLogin(data) {
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

export async function fetchCourseById(id, token) {
    const response = await fetch(apiURL + "subjects/v1/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        next: {
            revalidate: 1
        }
    })
    const data = await response.json()
    if (data.error) {
        throw new Error(data.error)
    }
    return data
}