import { ActionType } from './ActionType';
import { rootReducer } from './rootReducer';
import { setMessages, reducer } from './setMessages';

describe('ducks/setMessages', () => {
    const messages = ['message1', 'message2'];

    describe('action creator', () => {
        it('should create action', () => {
            const expected = {
                type: ActionType.SET_MESSAGES,
                messages,
            };

            const action = setMessages(messages);

            expect(action).toEqual(expected);
        });
    });

    describe('reducer', () => {
        const assertReducerResult = (newState) => {
            expect(newState).toHaveProperty('messages', messages);
        };

        it('subreducer should set data on state', () => {
            const state = {};
            const action = setMessages(messages);

            const newState = reducer(state, action);
            assertReducerResult(newState);
        });

        it('appreducer should set data on state', () => {
            const state = {};
            const action = setMessages(messages);

            const newState = rootReducer(state, action);
            assertReducerResult(newState);
        });
    });
});
