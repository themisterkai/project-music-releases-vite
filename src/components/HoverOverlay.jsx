// import { PropTypes } from "prop-types";


export const HoverOverlay = () => {
  return (
    <div className="image-overlay">
      <div className="icons-container">
        <img className="heart-icon" src="./src/assets/icons/heart.svg" alt="heart icon" />
        <img className="play-icon" src="./src/assets/icons/play.svg" alt="play icon" />
        <img className="dots-icon" src="./src/assets/icons/dots.svg" alt="dots icon" />
      </div>
    </div>
  )
};

HoverOverlay.propTypes = {
  // title: PropTypes.object.isRequired,
}