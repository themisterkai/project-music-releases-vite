import { PropTypes } from 'prop-types';

export const SidebarLink = ({ description, onClick, type }) => {
  return (
    <a
      href="javascript:void(0)"
      onClick={() => {
        onClick(type);
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
