import { createSelector } from "reselect";// use for memoization

//Use memoization selector when non-related components are re-rendering when changing state in other components
//Remember useSelector causes a component to re-render but ONLY when the object is different
//And every time we fire a action in redux, ALL reducers get hit

/**
 * This selector does not need memoization because it is not returning a new object every time like
 * a reduce function would, or a clone object function would
 *
 * @param {*} state the redux store state 
 * @returns the categories map from the categories reducer in the redux store
 */
//you should rename this to selectCategoriesMap because that is the convention
//This works because it is called from a useSelector hook which hooks to the redux store. That's where the input
//state in this function is coming from
//SIMPLEST WAY TO ACCESS THE REDUX STORE. You use this in the useSelector hook
//export const selectCategories = (state) => state.categories.categories;




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



const selectCategoryReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
