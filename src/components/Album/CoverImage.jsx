import { PropTypes } from 'prop-types';
import { HoverOverlay } from './HoverOverlay';
import { ReleaseDate } from './ReleaseDate';
import { TracksInfo } from './TracksInfo';

export const CoverImage = ({
  img,
  name,
  withHover,
  withExtraInfo,
  releaseDate,
  trackCount,
}) => {
  return (
    <div className="image-container">
      {withHover ? <HoverOverlay /> : <></>}
      <img src={img} className="album-image" alt={name} />
      {withExtraInfo && releaseDate != null && trackCount != null ? (
        <div className="album-extra">
          <ReleaseDate releaseDate={releaseDate} />
          <TracksInfo trackCount={trackCount} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

CoverImage.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  withHover: PropTypes.bool,
  withExtraInfo: PropTypes.bool,
  releaseDate: PropTypes.string,
  trackCount: PropTypes.number,
};
