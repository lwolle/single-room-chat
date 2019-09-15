import reduceReducers from 'reduce-reducers';
import { reducer as loginReducer } from './setUser';

const initialState = {
    userId: '',
    userName: '',
};

export const rootReducer = reduceReducers(
    initialState,
    loginReducer,
);

