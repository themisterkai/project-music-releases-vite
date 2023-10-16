import { PropTypes } from "prop-types";

export const CoverImage = ({
  images,
}) => {
  return (
    <div>
      <><img src={images.find(image => image.height === 300).url}></img></>
    </div>
  )
};

CoverImage.propTypes = {
  images: PropTypes.array.isRequired,
}