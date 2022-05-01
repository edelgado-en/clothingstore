import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

//you can pass the requestObjext here with all the search filters
/* export const fetchCategoriesStartAsync = (pageIndex) => {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart());
        try {
            console.log('pageIndex: ' + pageIndex);
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(fetchCategoriesSuccess(categoriesArray));

        } catch (err) {
            dispatch(fetchCategoriesFailed(err));
        }
    }
} */

//With this syntax you are chaining functions
/* const tt = (test) => async () => {
    await Promise.reject(new Error(''));
} */

//This is another way of chaining functions. YOu can have access to dispatch because you are calling
//tt2 from a dispatch(tt2) function
/* const tt2 = (test) => {
    return async (dispatch) => {
        await Promise.reject(new Error(''));
    }
} */

/* const test = (requestObject) => async (dispatch) => {
    //...
 }*/

//export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;


//This is another way of writing. You are chaining functions
export const fetchCategoriesStartAsync = (pageIndex) => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    
    try {
        console.log('pageIndex: ' + pageIndex);
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));

    } catch (err) {
        dispatch(fetchCategoriesFailed(err));
    }
}

const fetchCategoriesStart = () => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
}

const fetchCategoriesFailed = (error) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}
