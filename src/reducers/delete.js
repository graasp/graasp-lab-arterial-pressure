import { DELETE_BULBAR, DELETE_MEDULAR, CLEAR_DELETES } from '../types';

const initialState = {
  bulbar: false,
  medular: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BULBAR:
      return { bulbar: true, medular: false };
    case DELETE_MEDULAR:
      return { bulbar: false, medular: true };
    case CLEAR_DELETES:
      return { bulbar: false, medular: false };
    default:
      return state;
  }
};
