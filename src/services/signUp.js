const API_URL = process.env.NEXT_PUBLIC_API_URL

export default async function signUp (data) {
    return fetch(API_URL + "auth/v1/register", {
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