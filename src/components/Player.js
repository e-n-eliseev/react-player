import { useState, useEffect, useRef } from "react";
import Controls from "./Controls";
import TrackList from "./TrackList";
import tracks from "../tracks";
import Background from "./Background";

const Player = () => {
    //hook for a tracklist
    const [trackList, setTracklist] = useState(tracks);
    //current track number in the list
    const [trackNumber, setTrackNumber] = useState(0);
    //state of player(playing/paused)
    const [isPlaying, setIsPlaying] = useState(false);
    //state of tracklist vision
    const [isVisible, setIsVisible] = useState(false);
    //destructructuring
    let { id, url, title, artist, cover } = trackList[trackNumber];
    //reference for track
    let audio = useRef(new Audio(url));
    //reference for track position in the List
    let currentTrack = useRef(null);
    //random backgrund color
    const [isColor, setColor] = useState('');

    useEffect(() => {
        isPlaying ? audio.current.play() : audio.current.pause();
    }, [isPlaying]);
    useEffect(() => {
        if (isPlaying) {
            audio.current.pause();
            setIsPlaying(false);
            audio.current = new Audio(url);
            audio.current.play();
            setIsPlaying(true);
            setColor(Number.parseInt(Math.random() * (999999 - 100000) + 100000));
            currentTrack.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            audio.current = new Audio(url);
        }
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
                    setIsPlaying={setIsPlaying}
                    length={length}
                    trackNumber={trackNumber}
                    setTrackNumber={setTrackNumber}
                    isPlaying={isPlaying}
                    setIsVisible={setIsVisible}
                />

                <div className="track__time">
                    <p className="track__time_current">0:00</p>
                    <p className="track__time_end">10:00</p>
                </div>
                <input className="track__progress" type="range" min="0" max="100" step="1" value={0}></input>
            </div>
            {isVisible
                ? <TrackList
                    trackNumber={trackNumber}
                    trackList={trackList}
                    isPlaying={isPlaying}
                    currentTrack={currentTrack}
                    setTrackNumber={setTrackNumber} />
                : null
            }
            <Background isPlaying={isPlaying} isColor={isColor} />
        </div>
    )
}

export default Player;