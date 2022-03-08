import Track from "./Track";

const TrackList = ({
    trackList,
    isPlaying,
    setTrackNumber,
    trackNumber,
    currentTrack
}) => {
    return (
        <ul className="track__list">
            {!!trackList
                ? trackList.map((item, index) => {
                    return <Track
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