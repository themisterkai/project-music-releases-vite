import { PropTypes } from 'prop-types';

import { CoverImage } from '../Album/CoverImage';
import { AlbumName } from '../Album/AlbumName';
import { PlaylistDescription } from './PlaylistDescription';

export const Playlist = ({ playlist }) => {
  return (
    <div className="playlist-container">
      <CoverImage imageSrc={playlist.images[0].url} withHover />
      <AlbumName
        albumName={playlist.name}
        link={playlist.external_urls.spotify}
      />
      <PlaylistDescription description={playlist.description} />
    </div>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired,
};