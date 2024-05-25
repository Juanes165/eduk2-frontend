export const VideoIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30" height="30">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="white" strokeWidth="8"/>
            <polygon points="35,30 35,70 75,50" fill="white"/>
        </svg>
    )
}

export const ImageIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ffffff">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 18V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM6 18l3-4 2.25 3 3-4.5L18 18H6z"/>
        </svg>
    )
}

export const PdfIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ffffff">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M16 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-4-6zm-2 15H8v-2h6v2zm0-4H8v-2h6v2zm0-4H8V7h6v2zm2-5.66L18.07 7H16V2.34zM13 13V4.08L17.92 9H13z"/>
        </svg>
    )
}

export const EditCourseIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 6l2.293-2.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L18 10m-4-4l-9.707 9.707a1 1 0 0 0-.293.707V19a1 1 0 0 0 1 1h2.586a1 1 0 0 0 .707-.293L18 10m-4-4l4 4"/></svg>
    )
}

export const DeleteIcon = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0"/></svg>
    )
}

export function CreateCourseIcon(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 20v-3h-3v-2h3v-3h2v3h3v2h-3v3zM3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h14q.825 0 1.413.588T19 5v5h-2V8H3v11h13v2z"/></svg>
    )
  }