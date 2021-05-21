import { SET_ALERT, REMVOE_ALERT } from '../types';

export default (state, action) => {
  switch (action.types) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case REMVOE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
