import { createSelector } from "reselect";

//Remember: reduce always returns a new object, so you want to use memoization

//When you want to access the state in redux, you do it in the selector

//first we access the reducer we are working on 
const selectCartReducer = state => state.cart;

//this will cache the cartIems from the cart slice in the redux store
//This function is called from a useSelector hook, which hooks to the redux store
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantiy * cartItem.price, 0)
);

/**
 * 
 * @param {*} state the redux store state 
 * @returns the cartItems array from the cart slice in the redux store
 */
//export const getCartItems = (state) => state.cart.cartItems;