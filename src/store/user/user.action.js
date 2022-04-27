import { createAction } from "../../utils/reducer/reducer.utils";

import { USER_ACTION_TYPES } from "./user.types";

/**
 * Returns the action to set the current user.
 * 
 * @param {*} user the user to be updated 
 */
export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
}