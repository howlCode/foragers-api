import {
  FETCH_SHROOMS_BEGIN,
  FETCH_SHROOMS_SUCCESS,
  FETCH_SHROOMS_FAILURE
} from "../actions/shroomActions";

const initialState = {
  shrooms: [],
  loading: false,
  error: null
};

export default function shroomsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHROOMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SHROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        shrooms: action.payload.shrooms
      };

    case FETCH_SHROOMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
