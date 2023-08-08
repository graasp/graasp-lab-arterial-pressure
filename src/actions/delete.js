import {
  SECTION_ERASE_ALL,
  STIMULATION_ERASE_ALL,
  SET_STIMULATION_OR_SECTION,
  DELETE_BULBAR,
  DELETE_MEDULAR,
} from '../types';

export const deleteBulbar = () => (dispatch) => {
  dispatch({ type: SECTION_ERASE_ALL });
  dispatch({ type: STIMULATION_ERASE_ALL });
  dispatch({ type: SET_STIMULATION_OR_SECTION });
  dispatch({ type: DELETE_BULBAR });
};

export const deleteMedular = () => (dispatch) => {
  dispatch({ type: SECTION_ERASE_ALL });
  dispatch({ type: STIMULATION_ERASE_ALL });
  dispatch({ type: SET_STIMULATION_OR_SECTION });
  dispatch({ type: DELETE_MEDULAR });
};
