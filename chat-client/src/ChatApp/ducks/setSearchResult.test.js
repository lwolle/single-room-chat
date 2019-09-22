import { ActionType } from './ActionType';
import { rootReducer } from './store/rootReducer';
import { setSearchResult, reducer } from './setSearchResult';

describe('ducks/setSearchResult', () => {
    const searchResult = ['message1', 'message2'];

    describe('action creator', () => {
        it('should create action', () => {
            const expected = {
                type: ActionType.SET_SEARCH_RESULT,
                searchResult,
            };

            const action = setSearchResult(searchResult);

            expect(action).toEqual(expected);
        });
    });

    describe('reducer', () => {
        const assertReducerResult = (newState) => {
            expect(newState).toHaveProperty('searchResult', searchResult);
        };

        it('subreducer should set data on state', () => {
            const state = {};
            const action = setSearchResult(searchResult);

            const newState = reducer(state, action);
            assertReducerResult(newState);
        });

        it('appreducer should set data on state', () => {
            const state = {};
            const action = setSearchResult(searchResult);

            const newState = rootReducer(state, action);
            assertReducerResult(newState);
        });
    });
});
