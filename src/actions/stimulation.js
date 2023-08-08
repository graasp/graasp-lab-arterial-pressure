import {
  STIMULATION_NERF_PNEUMOGASTRIQUE,
  STIMULATION_NERF_SYMPATIQUE,
  SET_STIMULATION_OR_SECTION,
  SECTION_ERASE_ALL,
} from '../types';

export const stimulNerfPneumogastrique = () => (dispatch) => {
  dispatch({ type: SECTION_ERASE_ALL });
  dispatch({ type: SET_STIMULATION_OR_SECTION });
  dispatch({ type: STIMULATION_NERF_PNEUMOGASTRIQUE });
};

export const stimulNerfSympatique = () => (dispatch) => {
  dispatch({ type: SECTION_ERASE_ALL });
  dispatch({ type: SET_STIMULATION_OR_SECTION });
  dispatch({ type: STIMULATION_NERF_SYMPATIQUE });
};
