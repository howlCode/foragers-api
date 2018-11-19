import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token, amount, address) => async dispatch => {
  const res = await axios.post("/api/stripe", {
    token: token,
    amount: JSON.stringify(amount),
    address: address
  });
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleCourseToken = (token, course, amount) => async dispatch => {
  const res = await axios.post("/api/stripe/course", {
    token: token,
    course: course,
    amount: JSON.stringify(amount)
  });
  dispatch({ type: FETCH_USER, payload: res.data });
};
