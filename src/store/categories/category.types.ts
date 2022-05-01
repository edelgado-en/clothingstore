/* export const CATEGORIES_ACTION_TYPES = {
    FETCH_CATEGORIES_START: 'category/SET_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS: 'category/SET_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED: 'category/SET_CATEGORIES_FAILED'
} */

//when using Typescript you can use an enum instead of just a regular object to hold your action types
export const enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_START = 'category/SET_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'category/SET_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'category/SET_CATEGORIES_FAILED'
}

export type CategoryItem = {
    id: number,
    imageUrl: string,
    name: string,
    price: number
}

export type Category = {
    title: string,
    imageUrl: string,
    items: CategoryItem[]
}