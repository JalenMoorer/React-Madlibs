import React from 'react';
import PropTypes from 'prop-types';
import About from './About/About';
import Essay from './Essay/Essay';
import { getTextTemplates } from '../helpers';

require('./App.scss');

const App = ({
  fields, fieldAnswers, updateFieldAnswers, clearFieldAnswer, counter, resetFields,
}) => {
  const [isEdit, setEdit] = React.useState(false);
  const [inputObj, setInput] = React.useState({
    hometown: '',
    favoriteFood: '',
    loveToDo: '',
    music: '',
    messageIf: '',
    bar: '',
  });

  function handleBlur(e) {
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    const name = e.target.getAttribute('name');
    const answer = inputObj[name].trim();
    if (answer === '' && fieldAnswers[index].answers.length > 0) {
      clearFieldAnswer(index);
    } else if (answer !== fieldAnswers[index].answers) {
      const getFieldText = getTextTemplates(e.target.id);
      const randomQuestion = Math.floor(Math.random() * getFieldText.length);
      const text = getFieldText[randomQuestion];
      updateFieldAnswers(index, text, answer);
    }
  }

  function handleChange(e) {
    const { value } = e.target;
    const name = e.target.getAttribute('name');
    setInput({ ...inputObj, [name]: value });
  }

  function handleReset() {
    resetFields();
    setInput({
      hometown: '',
      favoriteFood: '',
      loveToDo: '',
      music: '',
      messageIf: '',
      bar: '',
    });
  }

  return (
    <div className={`container ${isEdit ? 'editView' : 'preview'}`}>
      <About
        fields={fields}
        inputObj={inputObj}
        onHandleChange={handleChange}
        onHandleBlur={handleBlur}
      />
      <Essay
        fieldAnswers={fieldAnswers}
        counter={counter}
        isEdit={isEdit}
        onSetEdit={setEdit}
        onReset={handleReset}
      />
    </div>
  );
};

App.propTypes = {
  fields: PropTypes.objectOf(PropTypes.string).isRequired,
  fieldAnswers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.int,
    text: PropTypes.string,
    answers: PropTypes.string,
  })).isRequired,
  updateFieldAnswers: PropTypes.func.isRequired,
  clearFieldAnswer: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default App;
