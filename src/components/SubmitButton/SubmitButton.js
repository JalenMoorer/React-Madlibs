import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ isEdit, onSetEdit, onReset }) => {
  React.useEffect(() => () => onSetEdit(false), [onSetEdit]);

  if (isEdit) {
    return (
      <button className="essayButton" value="Start Over" onClick={onReset}>Start Over</button>
    );
  }
  return (
    <button className="essayButton" value="Edit" onClick={() => onSetEdit(true)}>Edit</button>
  );
};

SubmitButton.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  onSetEdit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default SubmitButton;
