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

export async function fetchCourses() {
    const response = await fetch(apiURL + "subjects/v1", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
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

export async function fetchCourseById(id) {
    const response = await fetch(apiURL + "subjects/v1/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
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