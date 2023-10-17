// import { PropTypes } from "prop-types";

export const HoverOverlay = () => {
  return (
    <div className="image-overlay">
      <div className="icons-container">
        <img className="heart-icon" src="heart.svg" alt="heart icon" />
        <img className="play-icon" src="play.svg" alt="play icon" />
        <img className="dots-icon" src="/dots.svg" alt="dots icon" />
      </div>
    </div>
  );
};

HoverOverlay.propTypes = {
  // title: PropTypes.object.isRequired,
};
