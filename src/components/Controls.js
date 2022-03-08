import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward, faMusic } from '@fortawesome/fontawesome-free-solid';
import ReactTooltip from "react-tooltip";

const Controls = ({
    isPlaying,
    trackNumber,
    setTrackNumber,
    length,
    setIsPlaying,
    setIsVisible
}) => {
    const onChangeTrack = (action) => {
        if (action === "+") {
            trackNumber === length - 1 ? setTrackNumber(0) : setTrackNumber(trackNumber += 1);

        } else {
            trackNumber === 0 ? setTrackNumber(length - 1) : setTrackNumber(trackNumber -= 1);

        }

    }
    const onPlayPause = () => {
        setIsPlaying(!isPlaying)
    }
    const onChangeVision = () => {
        setIsVisible((prev) => !prev);
    }
    return (
        <ul className="controls">
            <li><button className="controls__prev"
                data-tip data-for="previous" onClick={() => onChangeTrack("-")}>
                <FontAwesomeIcon icon={faStepBackward} />
            </button></li>
            {!isPlaying
                ? <li><button className="controls__play"
                    data-tip data-for="play" onClick={onPlayPause}>
                    <FontAwesomeIcon icon={faPlay} />
                </button></li>
                : <li><button className="controls__pause"
                    data-tip data-for="play" onClick={onPlayPause}>
                    <FontAwesomeIcon icon={faPause} />
                </button></li>}
            <li><button className="controls__next"
                data-tip data-for="next" onClick={() => onChangeTrack("+")}>
                <FontAwesomeIcon icon={faStepForward} />
            </button></li>
            <li><button className="controls__next" data-tip data-for="trackListVision" onClick={onChangeVision}>
                <FontAwesomeIcon icon={faMusic} />
            </button></li>
            <ReactTooltip className='tooltip' id="trackListVision" place="top" effect="solid">
                Please click to change vision of track list
            </ReactTooltip>
            <ReactTooltip className='tooltip' id="previous" place="top" effect="solid">
                Click to hear previous track!
            </ReactTooltip>
            <ReactTooltip className='tooltip' id="play" place="top" effect="solid">
                Click to play/pause track!
            </ReactTooltip>
            <ReactTooltip className='tooltip' id="next" place="top" effect="solid">
                Click to hear next track!
            </ReactTooltip>
        </ul>
    )
}

export default Controls;