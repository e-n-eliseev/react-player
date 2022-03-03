import { FontAwesomeIcon } from 'react-fontawesome';

const Controls = ({ isPlaying }) => {
    return (
        <ul className="controls">
            <li><button className="controls__prev">
                {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
            </button></li>
            {!isPlaying
                ? <li><button className="controls__play">
                    {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
                </button></li>
                : <li><button className="controls__pause">
                    {/* <FontAwesomeIcon icon="fa-solid fa-pause" /> */}
                </button></li>}
            <li><button className="controls__next">
                {/* <FontAwesomeIcon icon="fa-solid fa-circle-play" /> */}
            </button></li>
        </ul>
    )
}

export default Controls;