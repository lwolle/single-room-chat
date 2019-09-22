import { search } from './search';
import { mockStore } from '../../testHelper/mockStore';
import {
    mockApi,
    errorResponse,
} from '../../testHelper/mockApi';
import { ActionType } from './ActionType';

describe('ducks/search', () => {
    it('should call api.search', () => {
        const searchTerm = 'search-term';
        const api = mockApi('search');
        const store = mockStore({}, { api });

        store.dispatch(search(searchTerm));
        expect(api.search).toHaveBeenCalledWith(searchTerm);
    });

    it('should dispatch actions', () => {
        const searchTerm = 'search-term';
        const messages = [{ text: 'text' }];
        const api = mockApi('search', {
            status: 200,
            data: {
                messages,
            },
        });
        const store = mockStore({}, { api });

        store.dispatch(search(searchTerm));

        expect(store.getActions()).toEqual([
            {
                type: ActionType.SET_SEARCH_RESULT,
                searchResult: messages,
            },
        ]);
    });

    describe('error', () => {
        it('should not dispatch action', () => {
            const searchTerm = 'search-term';

            const api = mockApi('search', errorResponse);
            const store = mockStore({}, { api });

            store.dispatch(search(searchTerm));

            expect(store.getActions()).toEqual([]);
        });
    });
});
