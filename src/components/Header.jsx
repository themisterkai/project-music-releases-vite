import { PropTypes } from "prop-types";

export const Header = ({ title }) => {
  return (
    <div className="header">
      <h3>{title}</h3>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.object.isRequired,
};
