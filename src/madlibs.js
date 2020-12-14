import {
  FIELDS as fields,
} from './constants';


// Action types
// ----------------------------------------------------------------------------

export const UPDATE_FIELD_ANSWERS = 'MADLIBS.UPDATE_FIELD_ANSWERS';
export const CLEAR_FIELD_ANSWER = 'MADLIBS.CLEAR_FIELD_ANSWER';
export const RESET_FIELDS = 'MADLIBS.RESET_FIELD';


// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fields,
  fieldAnswers: [
    { id: 0, text: '', answers: '' },
    { id: 1, text: '', answers: '' },
    { id: 2, text: '', answers: '' },
    { id: 3, text: '', answers: '' },
    { id: 4, text: '', answers: '' },
    { id: 5, text: '', answers: '' },
  ],
  counter: 0,
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_FIELD_ANSWERS: {
      let newArr;
      const { id } = action.payload;
      if (id < state.fieldAnswers.length) {
        newArr = [
          ...state.fieldAnswers.slice(0, id),
          action.payload,
          ...state.fieldAnswers.slice(id + 1),
        ];
      } else {
        newArr = [
          ...state.fieldAnswers,
          ...Array(id - state.fieldAnswers.length),
        ];
      }
      if (action.payload.answers.length > 0 && state.fieldAnswers[id].answers === '') {
        return { ...state, fieldAnswers: newArr, counter: state.counter + 1 };
      }
      return { ...state, fieldAnswers: newArr };
    }

    case CLEAR_FIELD_ANSWER: {
      let newArr;
      const { id } = action.payload;
      if (id < state.fieldAnswers.length) {
        newArr = [
          ...state.fieldAnswers.slice(0, id),
          INITIAL_STATE.fieldAnswers[id],
          ...state.fieldAnswers.slice(id + 1),
        ];
      } else {
        newArr = [
          INITIAL_STATE.fieldAnswers[0],
          ...Array(id - state.fieldAnswers.length),
        ];
      }
      return { ...state, fieldAnswers: newArr, counter: state.counter - 1 };
    }

    case RESET_FIELDS: {
      return { ...INITIAL_STATE };
    }

    default:
      return state;
  }
}


// Action creators
// ----------------------------------------------------------------------------

export function updateFieldAnswers(id, text, answers) {
  return { type: UPDATE_FIELD_ANSWERS, payload: { id, text, answers } };
}

export function clearFieldAnswer(id) {
  return { type: CLEAR_FIELD_ANSWER, payload: { id } };
}

export function resetFields() {
  return { type: RESET_FIELDS };
}
