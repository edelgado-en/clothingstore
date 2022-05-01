import { AnyAction } from 'redux';

//Not all actions have payloads

export type ActionWithPayload<T, P> = {
    type: T,
    payload: P
}

/**
 * The reason we have an action as a separate type and we don't simply make payload optional (payload?)
 * is because we actually want to throw an error when you can an action that is not supposed to have a payload
 */
export type Action<T> = {
    type: T
}

//for Typescript function overloading to work we need to use function keyword instead of arrow functions
export function createAction<T extends string, P>(
    type: T,
    payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
    type: T,
    payload: void
): Action<T>;


export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload };
} 

//export const createAction = (type, payload) => ({ type, payload });