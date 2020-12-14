import React from 'react';
import PropTypes from 'prop-types';

const About = ({
  fields, inputObj, onHandleChange, onHandleBlur,
}) => (
  <div id="About">
    <h1 className="heading">About Me</h1>
    <div className="form-area">
      {Object.keys(fields).map((key, index) => (
        <div key={key} className="form-group">
          <label htmlFor={key}> {fields[key]}
            <input id={key} type="text" onChange={onHandleChange} aria-label={key} name={key} value={inputObj[key]} data-index={index} onBlur={onHandleBlur} />
          </label>
        </div>
      ))}
    </div>
  </div>

);

About.propTypes = {
  fields: PropTypes.objectOf(PropTypes.string).isRequired,
  inputObj: PropTypes.objectOf(PropTypes.string).isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onHandleBlur: PropTypes.func.isRequired,
};

export default About;
