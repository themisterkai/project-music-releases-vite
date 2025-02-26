import { PropTypes } from 'prop-types';

import { AlbumName } from './Album/AlbumName';
import { ArtistName } from './Album/ArtistName';
import { CoverImage } from './Album/CoverImage';

export const Album = ({ album }) => {
  const image = album.images.find(image => image.height === 640);

  return (
    <div className="album-container">
      <CoverImage
        withHover
        img={image.url}
        name={album.name}
        withExtraInfo
        releaseDate={album.release_date}
        trackCount={album.total_tracks}
      />
      <AlbumName albumName={album.name} uri={album.external_urls.spotify} />
      <ArtistName className="artist-name" artists={album.artists} />
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
};
