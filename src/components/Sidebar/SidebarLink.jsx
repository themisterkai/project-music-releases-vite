import { PropTypes } from 'prop-types';

export const SidebarLink = ({ description, onClick, type }) => {
  return (
    <a
      href="#"
      onClick={() => {
        onClick(type);
        return false;
      }}
    >
      <h2>{description}</h2>
    </a>
  );
};

SidebarLink.propTypes = {
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
