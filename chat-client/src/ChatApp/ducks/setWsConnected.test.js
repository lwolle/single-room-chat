import { ActionType } from './ActionType';
import { rootReducer } from './store/rootReducer';
import {
    setWsConnected,
    reducer,
} from './setWsConnected';

describe('ducks/setWsConnected', () => {
    const connected = 'online';

    describe('action creator', () => {
        it('should create action', () => {
            const expected = {
                type: ActionType.SET_WS_CONNECTED,
                connected,
            };

            const action = setWsConnected(connected);

            expect(action).toEqual(expected);
        });
    });

    describe('reducer', () => {
        const assertReducerResult = (newState) => {
            expect(newState).toHaveProperty('connected', connected);
        };

        it('subreducer should set data on state', () => {
            const state = {};
            const action = setWsConnected(connected);

            const newState = reducer(state, action);
            assertReducerResult(newState);
        });

        it('appreducer should set data on state', () => {
            const state = {};
            const action = setWsConnected(connected);

            const newState = rootReducer(state, action);
            assertReducerResult(newState);
        });
    });
});
