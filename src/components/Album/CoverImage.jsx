import { PropTypes } from 'prop-types';

import { HoverOverlay } from './HoverOverlay';

export const CoverImage = ({ imageSrc, withHover }) => {
  return (
    <div className="image-container">
      {withHover ? <HoverOverlay /> : <></>}
      <img src={imageSrc}></img>
    </div>
  );
};

CoverImage.propTypes = {
  withHover: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
