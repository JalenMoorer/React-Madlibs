import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from '../SubmitButton/SubmitButton';
import { isPunctuation } from '../../helpers';

const Essay = ({
  fieldAnswers, counter, isEdit, onSetEdit, onReset,
}) => (
  <div id="Essay">
    <h2 className="heading">Your Essay Text</h2>
    <p className="essayText">
      {fieldAnswers.map((item) => {
        let element = item.text;
        element = element.split(' ').map((word) => {
          if (word.includes('$answer')) {
            return <span key={item.id} className="answer-text">{item.answers}{isPunctuation(word)}</span>;
          }
          return `${word} `;
        });
        return (
          <React.Fragment key={item.id}>{element}</React.Fragment>
        );
      })}
    </p>
    {counter >= 6 ? <SubmitButton onReset={onReset} isEdit={isEdit} onSetEdit={onSetEdit} /> : ''}
  </div>
);

Essay.propTypes = {
  fieldAnswers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.int,
    text: PropTypes.string,
    answers: PropTypes.string,
  })).isRequired,
  counter: PropTypes.number.isRequired,
  isEdit: PropTypes.bool.isRequired,
  onSetEdit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Essay;
