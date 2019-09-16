import reduceReducers from 'reduce-reducers';
import { reducer as setUserReducer } from './setUser';

export const initialState = {
    userId: '',
    userName: '',
    messages: [],
};

export const rootReducer = reduceReducers(
    initialState,
    setUserReducer,
);

