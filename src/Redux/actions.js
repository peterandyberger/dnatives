export const ADD_NUMBER = 'ADD_MOVIES';
export const SET_BRITISH = 'SET_BRITISH';

export function addNumber(data) {
  return { type: ADD_NUMBER, data: data };
}

export function setBritish(data) {
  return { type: SET_BRITISH, data: data };
}
