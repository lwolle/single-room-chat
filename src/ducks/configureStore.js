import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';

import { rootReducer } from './rootReducer';

export default function configureStore(preloadedState) {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    return createStore(rootReducer, preloadedState, composedEnhancers);
}
