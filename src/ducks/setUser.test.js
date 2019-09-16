import {
    setUser,
    reducer,
} from './setUser';
import { ActionType } from './ActionType';
import { rootReducer } from './rootReducer';

describe('ducks/setUser', () => {


    describe('action creator', () => {
        it('should create action', () => {
            const userName = 'name';
            const userId = 'id';

            const expected = {
                type: ActionType.SET_USER,
                userName: 'name',
                userId: 'id',
            };

            const action = setUser(userId, userName);

            expect(action).toEqual(expected);
        });
    });

    describe('reducer', () => {
        const userName = 'name';
        const userId = 'id';

        const assertReducerResult = (newState) => {
            expect(newState).toHaveProperty('userName', userName);
            expect(newState).toHaveProperty('userId', userId);
        };

        it('subreducer should set data on state', () => {
            const state = {};
            const action = setUser(userId, userName);

            const newState = reducer(state, action);
            assertReducerResult(newState);
        });

        it('appreducer should set data on state', () => {
            const state = {};
            const action = setUser(userId, userName);

            const newState = rootReducer(state, action);
            assertReducerResult(newState);
        });
    });
});
