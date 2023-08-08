import { SECTION_NERF_PNEUMOGASTRIQUE, SECTION_NERF_PNEUMOGASTRIQUE_SYMPATIQUE, SECTION_ERASE_ALL } from '../types';

const initialState = {
  nerfPneumogastrique: false,
  nerfSympatique: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SECTION_NERF_PNEUMOGASTRIQUE:
      return { nerfPneumogastrique: true, nerfSympatique: false };
    case SECTION_NERF_PNEUMOGASTRIQUE_SYMPATIQUE:
      return { nerfPneumogastrique: true, nerfSympatique: true };
    case SECTION_ERASE_ALL:
      return { nerfPneumogastrique: false, nerfSympatique: false };
    default:
      return state;
  }
};
