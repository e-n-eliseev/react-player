//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause,
    faStepForward,
    faStepBackward,
    faMusic,
    faSync,
    faArrowDown
} from '@fortawesome/fontawesome-free-solid';
//import react - tooltip component
import ReactTooltip from "react-tooltip";

const Controls = ({
    changeTrack,
    isPlaying,
    setIsPlaying,
    setIsVisible,
    setPlayMode,
    isLooped
}) => {
    //changing track handler
    const onChangeTrack = (action) => {
        changeTrack(action);
    }
    //play/pause handler
    const onPlayPause = () => {
        setIsPlaying((prev) => !prev)
    }
    //handler of setting vision of the track list
    const onChangeVision = () => {
        setIsVisible((prev) => !prev);
    }
    //handler of changing play mode
    const onChangePlayMode = () => {
        setPlayMode((prev) => !prev);
    }
    return (
        <ul className="controls">
            <li><button className="controls__prev"
                data-tip data-for="previous" onClick={() => onChangeTrack("-")}>
                <FontAwesomeIcon icon={faStepBackward} />
            </button></li>
            {/* visibility of play/pause buttons */}
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
            {/* visibility of mode buttons */}
            {isLooped
                ? <li><button className="controls__next"
                    data-tip data-for="loop" onClick={onChangePlayMode}>
                    <FontAwesomeIcon icon={faSync} />
                </button></li>
                : <li><button className="controls__next"
                    data-tip data-for="loop" onClick={onChangePlayMode}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </button></li>

            }

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
            <ReactTooltip className='tooltip' id="loop" place="top" effect="solid">
                {isLooped
                    ? "Click to hear playlist once!"
                    : "Click to repeat playlist!"
                }
            </ReactTooltip>
        </ul>
    )
}

export default Controls;