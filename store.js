import { createStore } from 'redux';
import { Provider } from 'react-redux';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});
const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.name !== action.payload.name),
      };
    default:
      return state;
  }
};
const store = createStore(cartReducer);
export { Provider, store };
export default store;
