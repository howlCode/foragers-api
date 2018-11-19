import axios from "axios";

export const FETCH_COURSES_BEGIN = "FETCH_COURSES_BEGIN";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "FETCH_COURSES_FAILURE";

export const fetchCoursesBegin = () => ({
  type: FETCH_COURSES_BEGIN
});

export const fetchCoursesSuccess = courses => ({
  type: FETCH_COURSES_SUCCESS,
  payload: { courses }
});

export const fetchCoursesError = error => ({
  type: FETCH_COURSES_FAILURE,
  payload: { error }
});

export function fetchCourses() {
  return dispatch => {
    dispatch(fetchCoursesBegin());
    return axios
      .get("/api/courses")
      .then(res => {
        dispatch(fetchCoursesSuccess(res.data));
        return res.data;
      })
      .catch(error => dispatch(fetchCoursesError(error)));
  };
}
