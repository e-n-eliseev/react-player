//import hooks
import { useState, useEffect, useRef, useCallback } from "react";
//import components
import Controls from "./Controls";
import TrackList from "./TrackList";
import Background from "./Background";
//import tracklist
import tracks from "../tracks";

const Player = () => {
    //state of a tracklist
    const [trackList, setTracklist] = useState(tracks);
    //state of current track number in the list
    const [trackNumber, setTrackNumber] = useState(0);
    //state of player(playing/paused)
    const [isPlaying, setIsPlaying] = useState(false);
    //state of current track time
    const [currentTrackTime, setCurrentTrackTime] = useState("00:00");
    //state of tracklist vision
    const [isVisible, setIsVisible] = useState(false);
    //state of playmode(looped or not)
    const [isLooped, setPlayMode] = useState(true);
    //state of progres bar
    let [progressBar, setProgressBar] = useState(0);

    //reference for track position in the List
    let currentTrack = useRef();
    //reference for timer
    let progressTimer = useRef();

    //quantity of tracks in the list
    const length = trackList.length;
    //destructructuring
    let { url, title, artist, cover, duration } = trackList[trackNumber];
    //reference for track object
    let audio = useRef(new Audio(url));

    //function which is calculate total duration of the track in seconds
    const durationToSeconds = useCallback((duration) => {
        const arr = duration.split(":");
        if (arr.length === 3) {
            return duration.split(":").reduce((acc, item, index) => {
                if (index === 0) {
                    acc = acc + item * 3600;
                } else if (index === 1) {
                    acc = acc + item * 60;
                } else {
                    acc = acc + +item;
                }
                return acc;
            }, 0);
        } else if (arr.length === 2) {
            return duration.split(":").reduce((acc, item, index) => {
                if (index === 0) {
                    acc = acc + item * 60;
                } else {
                    acc = acc + +item;
                }
                return acc;
            }, 0);
        } else return +arr[0];
    }, [duration]);
    const totalTime = durationToSeconds(duration);

    //function which convert progress value to  seconds 
    const progressToDuration = (event) => {
        return event.target.value * totalTime / 100;
    };
    //watching isPlaying state
    useEffect(() => {
        if (isPlaying) {
            audio.current.play();
            startTimer();
        } else {
            clearInterval(progressTimer.current);
            audio.current.pause();
        }
    }, [isPlaying]);

    //watching trackNumber state
    useEffect(() => {
        if (isPlaying) {
            audio.current.pause();
            setIsPlaying(false);
            setProgressBar(0);
            audio.current = new Audio(url);
            setCurrentTrackTime("00:00");
            startTimer();
            audio.current.play();
            setIsPlaying(true);
        } else {
            audio.current = new Audio(url);
        }
        //scroll to the viev of the active track if track list is visible
        currentTrack.current?.scrollIntoView({ behavior: 'smooth' });
    }, [trackNumber]);
    //function which is changing track
    const changeTrack = (action) => {
        if (action === "+") {
            trackNumber === length - 1 ? setTrackNumber(0) : setTrackNumber(trackNumber + 1);

        } else {
            trackNumber === 0 ? setTrackNumber(length - 1) : setTrackNumber(trackNumber - 1);

        }
    }
    //function managing timer
    const startTimer = () => {
        clearInterval(progressTimer.current);
        progressTimer.current = setInterval(() => {
            if (audio.current.ended) {
                if (trackNumber === trackList.length - 1 && !isLooped) {
                    setIsPlaying(false);
                } else {
                    setProgressBar(0);
                    changeTrack("+");
                }
            } else {
                setCurrentTrackTime(progressLine(audio.current.currentTime));
                setProgressBar(Math.round(100 * Math.ceil(audio.current.currentTime) / totalTime));
            }
        }, [1000]);
    }
    //function which convert time is seconds in  such view 00:00:00
    const progressLine = useCallback((currentTrackTime) => {
        const time = Math.ceil(currentTrackTime);
        let sec = time % 60;
        if (sec < 10) {
            sec = `0${sec}`;
        }
        let hour = Number.parseInt(time / 3600);
        if (hour < 10) {
            hour = `0${hour}`;
        }
        let min = Number.parseInt(time % 3600 / 60);
        if (min < 10) {
            min = `0${min}`;
        }
        if (hour === "00") {
            return `${min}:${sec}`;
        }
        return `${hour}:${min}:${sec}`;
    }, [currentTrackTime]);

    //function which is set time if we click on the progress bar
    const OnChangeTime = (event) => {
        audio.current.currentTime = progressToDuration(event);
        setCurrentTrackTime(progressLine(audio.current.currentTime));
        setProgressBar(Math.round(100 * Math.ceil(audio.current.currentTime) / totalTime));
    }

    return (
        <div className="container">
            <div className="player">
                <div className="track__cover">
                    <img className="track__img" alt="track-img" src={cover} />
                </div>
                <h2 className="track__artist">{artist}</h2>
                <p className="track__title">{title}</p>
                <Controls
                    isLooped={isLooped}
                    setPlayMode={setPlayMode}
                    changeTrack={changeTrack}
                    setIsPlaying={setIsPlaying}
                    isPlaying={isPlaying}
                    setIsVisible={setIsVisible}
                />
                <div className="track__time">
                    <p className="track__time_current">{currentTrackTime}</p>
                    <p className="track__time_end">{duration}</p>
                </div>
                <input className="track__progress" type="range" min="0" max="100" step="1" value={progressBar} onChange={(event) => OnChangeTime(event)}></input>
            </div>
            {isVisible
                ? <TrackList
                    currentTrackTime={currentTrackTime}
                    trackNumber={trackNumber}
                    trackList={trackList}
                    isPlaying={isPlaying}
                    currentTrack={currentTrack}
                    setTrackNumber={setTrackNumber} />
                : null
            }
            <Background isPlaying={isPlaying} />
        </div>
    )
}

export default Player;