export default function BadgesContainer ( props ) {
    return (
        <div className={`rounded-full ${props.obtained ? 'bg-gradient-to-tr from-amber-500 to-yellow-400' : 'bg-main-dark/15'} flex items-center justify-center ` + props.className}>
            <div className="rounded-full bg-white flex items-center justify-center w-10 h-10">
                <div className={`${props.obtained ? 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-white' : 'bg-main-dark/15 text-gray-400'} rounded-full flex items-center justify-center w-8 h-8`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}