import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
        return {
            ...state,
          currentUser: payload,
        };
      default:
          //since all reducers receive all actions, if this reducer receives an action not specify here
          //we simply return the exact same state
        return state;
    }
};
  
