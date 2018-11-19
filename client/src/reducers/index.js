import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as reduxForm } from "redux-form";
import shroomsReducer from "./shroomsReducer";
import coursesReducer from "./coursesReducer";
import productsReducer from "./productsReducer";
import shoppingReducer from "./shoppingReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  shrooms: shroomsReducer,
  courses: coursesReducer,
  products: productsReducer,
  itemsInCart: shoppingReducer
});
