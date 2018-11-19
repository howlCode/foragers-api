export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const REMOVE_PRODUCT_FROM_CART_SUCCESS =
  "REMOVE_PRODUCT_FROM_CART_SUCCESS";
export const ORDER_SUCCESS = "ORDER_SUCCESS";

export const addProductsSuccess = product => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload: { product }
});

export const orderSuccess = () => async dispatch => {
  dispatch({ type: ORDER_SUCCESS });
};

export const removeProductsSuccess = product => ({
  type: REMOVE_PRODUCT_FROM_CART_SUCCESS,
  payload: { product }
});

export function addProducts(product) {
  return dispatch => {
    dispatch(addProductsSuccess(product));
  };
}

export function removeProducts(product) {
  return dispatch => {
    dispatch(removeProductsSuccess(product));
  };
}
