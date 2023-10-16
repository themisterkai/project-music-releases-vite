import { PropTypes } from "prop-types";
import { HoverOverlay } from "./HoverOverlay";

export const CoverImage = ({
  images,
}) => {
  return (
    <div className="image-container">
      <HoverOverlay />
      <><img src={images.find(image => image.height === 300).url}></img></>
    </div>
  )
};

CoverImage.propTypes = {
  images: PropTypes.array.isRequired,
}