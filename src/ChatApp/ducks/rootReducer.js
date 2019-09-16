import reduceReducers from 'reduce-reducers';
import { reducer as setUserReducer } from './setUser';

const initialState = {
    userId: '',
    userName: '',
};

export const rootReducer = reduceReducers(
    initialState,
    setUserReducer,
);

