import configureStore from './configureStore';
import { rootSaga } from './rootSaga';
import { sagaMiddleware } from './sagaMiddleware';

export const store = configureStore();

sagaMiddleware.run(rootSaga);
