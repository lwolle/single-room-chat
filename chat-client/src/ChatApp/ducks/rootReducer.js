import reduceReducers from 'reduce-reducers';
import { reducer as setUserReducer } from './setUser';
import { reducer as setMessagesReducer } from './setMessages';

export const initialState = {
    userId: '',
    userName: '',
    messages: [],
};

export const rootReducer = reduceReducers(
    initialState,
    setUserReducer,
    setMessagesReducer,
);

