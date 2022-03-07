
const Track = ({ item, isPlaying, setTrackNumber, index }) => {
    const { id, url, title, artist, cover } = item;
    const onTrackChange = () => {
        setTrackNumber(index);
    }
    return (
        <li className="track__list__item" onClick={onTrackChange}>
            <div className="track__cover track__cover--small">
                <img className="track__img" alt="track-img" src={cover} />
                {isPlaying
                    ? <img className="track__img track__img--playing" alt="track-playing-img" src={cover} />
                    : null
                }
            </div>
            <div className="track__list__info">
                <p className="track__artist track__artist--small">{artist}</p>
                <p className="track__title track__title--small">{title}</p>
            </div>
            {!isPlaying
                ? <p className="track__time_end">10.00</p>
                : <p className="track__time_current">0.00</p>
            }
        </li >
    )
}

export default Track;