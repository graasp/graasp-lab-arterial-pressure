import { STIMULATION_NERF_PNEUMOGASTRIQUE, STIMULATION_NERF_SYMPATIQUE, STIMULATION_ERASE_ALL } from '../types';

const initialState = {
  nerfPneumogastrique: false,
  nerfSympatique: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STIMULATION_NERF_PNEUMOGASTRIQUE:
      return { nerfPneumogastrique: true, nerfSympatique: false };
    case STIMULATION_NERF_SYMPATIQUE:
      return { nerfPneumogastrique: false, nerfSympatique: true };
    case STIMULATION_ERASE_ALL:
      return { nerfPneumogastrique: false, nerfSympatique: false };
    default:
      return state;
  }
};
