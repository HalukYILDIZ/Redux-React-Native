import * as actionTypes from './actionTypes';

export const increment = value => {
  return {
    type: actionTypes.INCREMENT,
    val: value,
  };
};
export const decrement = value => {
  return {
    type: actionTypes.DECREMENT,
    val: value,
  };
};
export const add = value => {
  return {
    type: actionTypes.ADD,
    val: value,
  };
};
export const subtract = value => {
  return {
    type: actionTypes.SUBTRACT,
    val: value,
  };
};
