import { default as createSagaMiddleware } from 'redux-saga';
import { default as createSagaMonitor } from '@clarketm/saga-monitor';

const config = {
    level: 'log',
    rootSagaStart: true,
    effectTrigger: true,
    effectResolve: true,
    actionDispatch: true,
};

const middlewareOptions = {};
if (process.env.NODE_ENV !== 'test') {
    middlewareOptions.sagaMonitor = createSagaMonitor(config);
}

export const sagaMiddleware = createSagaMiddleware(middlewareOptions);
