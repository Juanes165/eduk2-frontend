export default function Layout({ children, signin, signup }){
    return (
        <>
            {children}
            {signin}
            {signup}
        </>
    )
}