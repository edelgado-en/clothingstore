import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

/**
 * 
 * @param {*} cartItems 
 * @returns 
 */
export const setCartItems = (cartItems) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITMES, cartItems);
}

export const toggleCart = () => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART);
}