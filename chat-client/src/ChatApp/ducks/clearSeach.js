import { setSearchResult } from './setSearchResult';

export const clearSearch = () => (dispatch) => {
    dispatch(setSearchResult([]));
};
