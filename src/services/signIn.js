const API_URL = process.env.NEXT_PUBLIC_API_URL

export default async function signIn (email, password) {
    /*
        Fetches the login data to the API
        @param {Object} data - The data to be sent to the API
        @returns {Promise} - The data from the API
    */

    const data = {
        email,
        password
    }
    
    return fetch(API_URL + "auth/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    }).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()

    }).then((data) => {
        if (data.error) {
            throw new Error(data.error)
        }
        return data
    })
}