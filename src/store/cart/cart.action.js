import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const toggleCart = () => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART);
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, carItemToClear) => {
    const newCartItems = clearItem(cartItems, carItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

/**
 *
 * @param {*} cartItems
 * @param {*} productToAdd
 * @returns
 */
 const addCartItem = (cartItems, productToAdd) => {
    const newCartItems = [...cartItems];
  
    let productFound = false;
  
    for (let i = 0; i < newCartItems.length; i++) {
      if (productToAdd.id === newCartItems[i].id) {
        newCartItems[i].quantity = newCartItems[i].quantity + 1;
        productFound = true;
        break;
      }
    }
  
    if (!productFound) {
      newCartItems.push({ ...productToAdd, quantity: 1 });
    }
  
    return newCartItems;
};
  
  /**
   *
   * @param {*} cartItems
   * @param {*} cartItemToRemove
   * @returns
   */
const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};
  
  /**
   *
   * @param {*} cartItems
   * @param {*} cartItemToClear
   * @returns
   */
const clearItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

/* const addCartItemv2 = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}; */