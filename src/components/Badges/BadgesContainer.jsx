export default function BadgesContainer ({ children, obtained }) {
    return (
        <div className={`p-1 w-20 h-20 rounded-full ${obtained ? 'bg-gradient-to-tr from-amber-500 to-yellow-400' : 'bg-main-dark/15'} flex items-center justify-center`}>
            <div className="rounded-full w-16 h-16 bg-white p-1 flex items-center justify-center">
                <div className={`${obtained ? 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-white' : 'bg-main-dark/15 text-gray-400'} rounded-full w-14 h-14 flex items-center justify-center`}>
                    {children}
                </div>
            </div>
        </div>
    )
}