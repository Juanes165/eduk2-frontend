export default function Button(props) {
    return (
        <button {...props} className={`m-2 p-10 text-white text-3xl rounded-xl transition-all duration-500 bg-${props.primaryColor} hover:bg-${props.hoverColor} hover:shadow-md`}>
            {props.children}
        </button>
    )
}