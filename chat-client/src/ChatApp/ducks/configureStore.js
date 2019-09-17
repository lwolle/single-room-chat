import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { api } from './api';

export default function configureStore(preloadedState) {
    const middlewares = [thunk.withExtraArgument({ api })];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    return createStore(rootReducer, preloadedState, composedEnhancers);
}
