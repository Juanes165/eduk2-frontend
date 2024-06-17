export default function BadgesEduk2Container(props) {
    return (
        <div className={`group relative flex items-center justify-center rounded-full ` + props.className}>
            <img src={`/images/badges/${props.level}.png`} className="rounded-full"/>
        </div>
    )
}