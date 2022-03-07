import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/fontawesome-free-solid';

const Controls = ({ isPlaying, trackNumber, setTrackNumber, length }) => {
    const onChangeTrack = (action) => {
        console.log(action);
        if (action === "+") {
            trackNumber === length - 1 ? setTrackNumber(0) : setTrackNumber(trackNumber += 1);
        } else {
            trackNumber === 0 ? setTrackNumber(length - 1) : setTrackNumber(trackNumber -= 1);
        }

    }
    return (
        <ul className="controls">
            <li><button className="controls__prev" onClick={() => onChangeTrack("-")}>
                <FontAwesomeIcon icon={faStepBackward} />
            </button></li>
            {!isPlaying
                ? <li><button className="controls__play">
                    <FontAwesomeIcon icon={faPlay} />
                </button></li>
                : <li><button className="controls__pause">
                    <FontAwesomeIcon icon={faPause} />
                </button></li>}
            <li><button className="controls__next" onClick={() => onChangeTrack("+")}>
                <FontAwesomeIcon icon={faStepForward} />
            </button></li>
        </ul>
    )
}

export default Controls;