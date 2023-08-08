import { SET_NORMAL_INNERVATION, SET_STIMULATION_OR_SECTION } from '../types';

const initialState = true;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NORMAL_INNERVATION:
      return true;
    case SET_STIMULATION_OR_SECTION:
      return false;
    default:
      return state;
  }
};
