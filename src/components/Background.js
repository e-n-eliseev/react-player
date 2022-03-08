
const Background = ({ isColor, isPlaying }) => {

    return (
        <div className={`background ${isPlaying ? "playing" : "idle"}`} />
    )
}

export default Background;