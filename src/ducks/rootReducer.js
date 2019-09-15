import reduceReducers from 'reduce-reducers';
import { reducer as loginReducer } from './login';

const initialState = {
    userId: '',
    userName: '',
};

export const rootReducer = reduceReducers(
    initialState,
    loginReducer,
);

