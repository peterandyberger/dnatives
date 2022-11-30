import { ADD_NUMBER, SET_BRITISH } from './actions';

const initialState = {
  value: '',
  british: false,
};

function dnativestore(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        value: action.data,
      };
    case SET_BRITISH:
      return {
        ...state,
        british: action.data,
      };
    default:
      return state;
  }
}

export default dnativestore;
