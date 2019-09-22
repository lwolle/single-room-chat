import reduceReducers from 'reduce-reducers';
import { reducer as setUserReducer } from '../setUser';
import { reducer as setMessagesReducer } from '../setMessages';
import { reducer as setSearchResultReducer } from '../setSearchResult';
import { reducer as setWsConnectedReducer } from '../setWsConnected';

export const initialState = {
    userId: '',
    userName: '',
    messages: [],
    searchResult: [],
};

export const rootReducer = reduceReducers(
    initialState,
    setUserReducer,
    setMessagesReducer,
    setMessagesReducer,
    setSearchResultReducer,
    setWsConnectedReducer,
);

