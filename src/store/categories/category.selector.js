import { createSelector } from "reselect";


/* export const getCategoriesMap = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => {
        return Object.assign({}, categoriesSlice.categoriesMap);
    }
); */

/**
 * This selector does not need memoization because it is not returning a new object every time like
 * a reduce function would, or a clone object function would
 * 
 * @param {*} state the redux store state 
 * @returns the categories map from the categories reducer in the redux store
 */
export const getCategoriesMap = (state) => state.categories.categoriesMap;


//if I were to return a new object like this. It will re-render the category component every time any 
//reducer updates the redux store instead of only re-rendering the component when the categoriesMap is different
//export const getCategoriesMap = (state) => Object.assign({}, state.categories.categoriesMap);

//So to avoid this issue, we use memoization using the reselect library. This library will cache the selector
//and it will only fire when the contents of the object being return is actually different, thus preventing
//unnecessary re-rendering of a component (which will also fire up useEffect)
//Here is an example:

/**
 * 
 * @param {*} state the redux store state 
 * @returns the categories reducer from the redux store
 */
/* const selectCategoriesReducer = (state) => {
    return state.categories;
} */

//The createSelector takes 2 parameters, the first one is an input array, the second one is the output which takes the first parameter as input
//So in this case categoriesSlice refers to selectCategoriesReducer
/* export const getCategoriesMap = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => {
        return Object.assign({}, categoriesSlice.categoriesMap); //so although this returns a new object, reselect will cache it and it will only fire off when the contents are actually different
    }
); */
