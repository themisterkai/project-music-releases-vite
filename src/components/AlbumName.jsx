import { PropTypes } from "prop-types";

export const AlbumName = ({ albumName, link }) => {
  return (
    <div className="album-name">
      <a href={link} target={`_blank`}>
        {albumName}
      </a>
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
