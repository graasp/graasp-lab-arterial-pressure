import {
  SECTION_NERF_PNEUMOGASTRIQUE,
  SECTION_NERF_PNEUMOGASTRIQUE_SYMPATIQUE,
  SET_STIMULATION_OR_SECTION,
  STIMULATION_ERASE_ALL,
  CLEAR_DELETES,
} from '../types';

export const sectionNerfPneumogastrique = () => (dispatch) => {
  dispatch({ type: STIMULATION_ERASE_ALL });
  dispatch({ type: CLEAR_DELETES });
  dispatch({ type: SET_STIMULATION_OR_SECTION });
  dispatch({ type: SECTION_NERF_PNEUMOGASTRIQUE });
};
export const sectionNerfPneumogastriqueSympatique = () => (dispatch) => {
  dispatch({ type: STIMULATION_ERASE_ALL });
  dispatch({ type: CLEAR_DELETES });
  dispatch({ type: SET_STIMULATION_OR_SECTION });
  dispatch({ type: SECTION_NERF_PNEUMOGASTRIQUE_SYMPATIQUE });
};
