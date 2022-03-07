import { useState, useEffect } from "react";
import Controls from "./Controls";
import TrackList from "./TrackList";
import tracks from "../tracks";

const Player = () => {
    //hook for a tracklist
    const [trackList, setTracklist] = useState(tracks);
    //current track number in the list
    const [trackNumber, setTrackNumber] = useState(0);
    //current track info
    const [trackInfo, setTrackInfo] = useState(trackList[trackNumber]);
    //state of player(playing/paused)
    const [isPlaying, setisPlaying] = useState(false);
    //destructructuring
    const { id, url, title, artist, cover } = trackInfo;

    useEffect(() => {
        setTrackInfo(trackList[trackNumber]);
    }, [trackNumber]);
    const length = trackList.length;
    return (
        <div className="container">
            <div className="player">
                <div className="track__cover">
                    <img className="track__img" alt="track-img" src={cover} />
                </div>
                <h2 className="track__artist">{artist}</h2>
                <p className="track__title">{title}</p>
                <Controls
                    length={length}
                    trackNumber={trackNumber}
                    setTrackNumber={setTrackNumber}
                    isPlaying={isPlaying}
                />

                <div className="track__time">
                    <p className="track__time_current">0:00</p>
                    <p className="track__time_end">10:00</p>
                </div>
                <input className="track__progress" type="range" min="0" max="100" step="1" value={0}></input>
            </div>
            <TrackList
                trackList={trackList}
                isPlaying={isPlaying}
                setTrackNumber={setTrackNumber} />
        </div>
    )
}

export default Player;