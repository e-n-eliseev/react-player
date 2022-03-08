//import react-tooltip component
import ReactTooltip from "react-tooltip";

const Track = ({
    item,
    isPlaying,
    setTrackNumber,
    index,
    trackNumber,
    currentTrack,
    currentTrackTime
}) => {
    //destructuring
    const { title, artist, cover, duration } = item;
    //change track handler
    const onTrackChange = () => {
        setTrackNumber(index);
    }
    return (
        <li className="track__list__item"
            data-tip data-for="track" onClick={onTrackChange}>
            <div ref={trackNumber === index ? currentTrack : null} className="track__cover track__cover--small">
                <img className="track__img" alt="track-img" src={cover} />
                {/* vinil is visible when track is paying */}
                {(isPlaying && (trackNumber === index))
                    ? <img className="track__img track__img--playing" alt="track-playing-img" src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 56 56' style='enable-background:new 0 0 56 56;' xml:space='preserve'%3E%3Cpath style='fill:%23071739;' d='M47.799,8.201c-10.935-10.935-28.663-10.935-39.598,0c-10.935,10.935-10.935,28.663,0,39.598 c10.935,10.935,28.663,10.935,39.598,0C58.734,36.864,58.734,19.136,47.799,8.201z M32.95,32.95c-2.734,2.734-7.166,2.734-9.899,0 c-2.734-2.734-2.734-7.166,0-9.899s7.166-2.734,9.899,0S35.683,30.216,32.95,32.95z'/%3E%3Cpath style='fill:%23E7ECED;' d='M35.778,20.222c-4.296-4.296-11.261-4.296-15.556,0c-4.296,4.296-4.296,11.261,0,15.556 c4.296,4.296,11.261,4.296,15.556,0C40.074,31.482,40.074,24.518,35.778,20.222z M30.121,30.121c-1.172,1.172-3.071,1.172-4.243,0 s-1.172-3.071,0-4.243s3.071-1.172,4.243,0S31.293,28.95,30.121,30.121z'/%3E%3Cg%3E%3Cpath style='fill:%23709fdc;' d='M35.778,35.778c-0.76,0.76-1.607,1.378-2.504,1.87l8.157,14.92c2.284-1.25,4.434-2.835,6.368-4.769 c1.934-1.934,3.519-4.084,4.769-6.368l-14.92-8.157C37.157,34.172,36.538,35.018,35.778,35.778z'/%3E%3Cpath style='fill:%23709fdc;' d='M20.222,20.222c0.76-0.76,1.607-1.378,2.504-1.87l-8.157-14.92c-2.284,1.25-4.434,2.835-6.368,4.769 s-3.519,4.084-4.769,6.368l14.92,8.157C18.843,21.828,19.462,20.982,20.222,20.222z'/%3E%3C/g%3E%3C/svg%3E" />
                    : null
                }
            </div>
            <div className="track__list__info">
                <p className="track__artist track__artist--small">{artist}</p>
                <p className="track__title track__title--small">{title}</p>
            </div>
            {/* current time of the track vision */}
            {!(isPlaying && (trackNumber === index))
                ? <p className="track__time_end">{duration}</p>
                : <p className="track__time_current">{currentTrackTime}</p>
            }
            <ReactTooltip className='tooltip' id="track" place="bottom" effect="solid">
                Click to hear this track!
            </ReactTooltip>
        </li >
    )
}

export default Track;