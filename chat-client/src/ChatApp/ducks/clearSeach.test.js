import { clearSearch } from './clearSeach';
import { mockStore } from '../../testHelper/mockStore';
import { ActionType } from './ActionType';

describe('ducks/clearSearch', () => {
    it('should create action', () => {
        const store = mockStore();
        store.dispatch(clearSearch());

        expect(store.getActions()).toEqual([{
            type: ActionType.SET_SEARCH_RESULT,
            searchResult: [],
        }]);
    });
});
