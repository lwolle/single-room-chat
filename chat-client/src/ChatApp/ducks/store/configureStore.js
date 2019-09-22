import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { api } from '../api/api';
import { sagaMiddleware } from './sagaMiddleware';

export default function configureStore(preloadedState) {
    const middlewares = [
        thunk.withExtraArgument({ api }),
        sagaMiddleware,
    ];
    const appliedMiddleware = applyMiddleware(...middlewares);

    const composedEnhancers = compose(appliedMiddleware);

    return createStore(rootReducer, preloadedState, composedEnhancers);
}
