import {
  FETCH_COURSES_BEGIN,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE
} from "../actions/courseActions";

const initialState = {
  courses: [],
  loading: false,
  error: null
};

export default function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        courses: action.payload.courses
      };

    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
