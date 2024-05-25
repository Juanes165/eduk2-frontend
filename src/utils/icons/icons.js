export const VideoIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30" height="30">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="white" strokeWidth="8" />
            <polygon points="35,30 35,70 75,50" fill="white" />
        </svg>
    )
}

export const ImageIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ffffff">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 18V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM6 18l3-4 2.25 3 3-4.5L18 18H6z" />
        </svg>
    )
}

export const PdfIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ffffff">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-4-6zm-2 15H8v-2h6v2zm0-4H8v-2h6v2zm0-4H8V7h6v2zm2-5.66L18.07 7H16V2.34zM13 13V4.08L17.92 9H13z" />
        </svg>
    )
}

export const DeleteIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
            <path fill="currentColor" d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0" />
        </svg>
    )
}
export const Trophy = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24 " {...props}>
            <path fill="none" stroke="currentColor" stroke-width="2" d="M10.325 14.763A6.002 6.002 0 0 1 6 9V1h12v9M6 3H1v4c0 2.509 1.791 4 4 4h1m14.034-.115C21.742 10.49 23 9.103 23 7V3h-5m-8 16H5v4h11.5m0-13a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13zm3.5 4l-4.5 4.5L13 16m-2.794-.576A4 4 0 0 0 8 19" />
        </svg>
    )
}