import { PropTypes } from 'prop-types';

import { HoverOverlay } from './HoverOverlay';
import { ReleaseDate } from './ReleaseDate';
import { TracksInfo } from './TracksInfo';

export const CoverImage = ({
  imageSrc,
  withHover,
  releaseDate,
  trackCount,
}) => {
  return (
    <div className="image-container">
      {withHover ? <HoverOverlay /> : <></>}
      <img src={imageSrc}></img>
      {releaseDate != null && trackCount != null ? (
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
  withHover: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  trackCount: PropTypes.number,
};
