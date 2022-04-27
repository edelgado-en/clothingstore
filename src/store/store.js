import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//middlewares run before an action hits the reducer
//middlewares are like enhancers
//Only add this logger in DEV
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);