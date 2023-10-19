import { PropTypes } from 'prop-types';

import { AlbumName } from './AlbumName';
import { ArtistName } from './ArtistName';
import { CoverImage } from './CoverImage';

// getSeparator is a helper function to get the proper separator between artist names.
// It can return the following results:
// 1. "," if there are multiple artists, except for the last two artists
// 2. "&" if there are only 2 artists, or between the last 2 artists if there are multiple artists
// 3. "" (blank) if there is only one artist, or for the final artist on a list
const getSeparator = (idx, arrayLength) => {
  let separator = '';
  if (idx === arrayLength - 2) {
    separator = ' & ';
  } else if (idx < arrayLength - 2) {
    separator = ', ';
  }
  return separator;
};

export const Album = ({ album }) => {
  return (
    <div className="album-container">
      <CoverImage images={album.images} />
      <AlbumName albumName={album.name} link={album.external_urls.spotify} />
      {album.artists.map((artist, idx) => {
        return (
          <span key={artist.id} className="artist-name">
            <ArtistName artist={artist} />
            {getSeparator(idx, album.artists.length)}
          </span>
        );
      })}
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
};
