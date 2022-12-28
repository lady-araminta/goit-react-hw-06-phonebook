import PropTypes from 'prop-types';

export const ContactElem = ({ id, name, number }) => {
  return (
    <li key={id}>
      <div>
        <span>{name}:</span>
        <span>{number}</span>
      </div>
      <button type="button">Delete</button>
    </li>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
