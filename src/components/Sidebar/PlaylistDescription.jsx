import { PropTypes } from 'prop-types';

export const PlaylistDescription = ({ description }) => {
  return <div className="playlist-description">{description}</div>;
};

PlaylistDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
