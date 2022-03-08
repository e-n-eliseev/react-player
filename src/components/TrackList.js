//import component
import Track from "./Track";

const TrackList = ({
    trackList,
    isPlaying,
    setTrackNumber,
    trackNumber,
    currentTrack,
    currentTrackTime
}) => {
    return (
        <ul className="track__list">
            {!!trackList
                ? trackList.map((item, index) => {
                    return <Track
                        currentTrackTime={currentTrackTime}
                        key={item.id}
                        item={item}
                        index={index}
                        trackNumber={trackNumber}
                        isPlaying={isPlaying}
                        setTrackNumber={setTrackNumber}
                        currentTrack={currentTrack} />
                })
                : <p className="track__list__empty">
                    Your track list is empty
                </p>
            }
        </ul>
    )
}

export default TrackList;