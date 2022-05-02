import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

//TODO: move this loggerMiddleware function to its own folder and import it here
/**
 * Write your own logger because redux-logger makes some extra calls to components
 * and it makes it confusing to understand why your component is being called twice sometimes.
 * @param {*} store 
 * 
 * @returns 
 */
const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());

}

const persistConfig = {
    key: 'root', //persist the whole thing
    storage,
    whitelist: ['car'] //you can also use a blacklist. We only want to persist the cart reducer data
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

//middlewares run before an action hits the reducer
//middlewares are like enhancers
//Only add this logger in DEV
const middleWares = [
    process.env.NODE_ENV !== 'production' && loggerMiddleware,
    thunk
].filter(Boolean); 

//To use the Chrome extension Redux DevTools in development mode
const composeEnhancer = 
 (process.env.NODE_ENV !== 'production' &&
   window &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
 compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);