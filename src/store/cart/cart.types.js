
/**
 * Add prefix a cart/ to avoid naming conflicts between reducers because
 * every an action get fired, redux hits ALL reducers. So we want to be clear
 * and explicity about which reducer should be receiving a particular action.
 */
export const CART_ACTION_TYPES = {
    TOGGLE_CART: 'cart/TOGGLE_CART',
    SET_CART_ITEMS: 'cart/SET_CART_ITEMS',
    SET_CART_COUNT: 'cart/SET_CART_COUNT',
    SET_CART_TOTAL: 'cart/SET_CART_TOTAL'
}