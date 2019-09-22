import { ResponseStatusHandler } from './ResponseStatusHandler';
import { setSearchResult } from './setSearchResult';

export const search = (searchTerm) => async (dispatch, getState, { api }) => {
    const response = await api.search(searchTerm);

    if (ResponseStatusHandler.isOk(response.status)) {
        const { messages } = response.data;
        dispatch(setSearchResult(messages));
    }
};
