import { PropTypes } from "prop-types";

export const ArtistName = ({ artists }) => {
  return (
    <div className="artistName">
      {artists.map((artist, idx, arr) => {
        let separator = "";
        if (idx === arr.length - 2) {
          separator = " & ";
        } else if (idx < arr.length - 2) {
          separator = ", ";
        }

        return (
          <span key={artist.id}>
            <a href={artist.external_urls.spotify} target={`_blank`}>
              {artist.name}
            </a>
            {separator}
          </span>
        );
      })}
    </div>
  );
};

ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};
