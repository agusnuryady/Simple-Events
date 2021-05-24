import {
  DELETE_EVENTS,
  RESET_REDUCER,
  SAVE_EVENTS,
  SET_USERNAME,
} from '../redux-actions';

const initialState = {
  name: '',
  myEvent: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_REDUCER:
      return initialState;
    case SET_USERNAME:
      return { ...state, name: payload };
    case SAVE_EVENTS:
      return { ...state, myEvent: [payload, ...state.myEvent] };
    case DELETE_EVENTS:
      return {
        ...state,
        myEvent: state.myEvent.length
          ? state.myEvent.filter((item, index) => item.id !== payload)
          : [],
      };
    default:
      return state;
  }
};
