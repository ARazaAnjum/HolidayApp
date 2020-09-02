import {
  LIST_LOADING_INITIATE,
  LIST_LOADING_SUCCESS,
  LIST_LOADING_FAILED,
} from '../constants/index';

const initialState = {
  loader: false,
  data: [],
};

export function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_LOADING_INITIATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case LIST_LOADING_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case LIST_LOADING_FAILED: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    default:
      return state;
  }
}
