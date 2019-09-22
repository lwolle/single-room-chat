function mockFunctions() {
    const originalModule = jest.requireActual('redux');
    global.createStore = jest.fn();

    return {
        ...originalModule,
        createStore: global.createStore,
    };
}

jest.mock('redux', () => mockFunctions());

/* eslint-disable import/first */
import configureStore from './configureStore';
import { rootReducer } from './rootReducer';
/* eslint-enable import/first */

describe('configureStore', () => {
    it('should call createStore', () => {
        const preloadedState = '';

        configureStore(preloadedState);
        expect(global.createStore).toHaveBeenCalledWith(rootReducer, preloadedState, expect.any(Function));
    });
});
