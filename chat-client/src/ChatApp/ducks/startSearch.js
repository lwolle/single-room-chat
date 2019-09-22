import { ActionType } from './ActionType';

export const startSearch = (searchTerm) => ({
    type: ActionType.START_SEARCH,
    searchTerm,
});
