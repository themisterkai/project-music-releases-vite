import { PropTypes } from "prop-types";

import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";


export const Album = ({ album }) => {
  return (
    <div className='album-container'>
      <CoverImage images={album.images} />
      <AlbumName
        albumName={album.name}
        link={album.external_urls.spotify} />
      <ArtistName artists={album.artists} />
      
      {/* {album.album_type} */}
    </div>
  )
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
}