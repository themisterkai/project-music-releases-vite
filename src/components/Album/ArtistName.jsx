import { PropTypes } from 'prop-types';

export const ArtistName = ({ artist }) => {
  return (
    <a href={artist.external_urls.spotify} target={`_blank`}>
      {artist.name}
    </a>
  );
};

ArtistName.propTypes = {
  artist: PropTypes.object.isRequired,
};
