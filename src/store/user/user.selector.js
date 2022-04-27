/**
 * The reason we do this abstraction is so that all the components that interact
 * with this state don't have to know how to fetch the data. It's declarative.
 * If later on we have to make a change to the name of the syntax due to a redux upgrade,
 * then we only have to make one change here as opposed to changes in every component
 * where this is use.
 * 
 * @param {*} state the whole redux store 
 * @returns the current user in the userReducer of the redux store
 */
export const selectCurrentUser = (state) => state.user.currentUser;