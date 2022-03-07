import Track from "./Track";

const TrackList = ({ trackList, isPlaying, setTrackNumber }) => {
    return (
        <ul className="track__list">
            {!!trackList
                ? trackList.map((item, index) => {
                    return <Track
                        key={item.id}
                        item={item}
                        index={index}
                        isPlaying={isPlaying}
                        setTrackNumber={setTrackNumber} />
                })
                : <p className="track__list__empty">
                    Your track list is empty
                </p>
            }
        </ul>
    )
}

export default TrackList;