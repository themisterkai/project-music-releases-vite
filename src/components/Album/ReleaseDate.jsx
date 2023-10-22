import { PropTypes } from 'prop-types';

export const ReleaseDate = ({ releaseDate }) => {
  return (
    <div className="release-date">
      {new Date(releaseDate).toLocaleDateString('en-uk', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </div>
  );
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string.isRequired,
};
