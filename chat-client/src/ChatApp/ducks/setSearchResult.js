import { ActionType } from './ActionType';

export const setSearchResult = (searchResult) => ({
    type: ActionType.SET_SEARCH_RESULT,
    searchResult,
});

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.SET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.searchResult,
            };
        default:
            return state;
    }
};
