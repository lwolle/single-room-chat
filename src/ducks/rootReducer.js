import reduceReducers from 'reduce-reducers';

const initialState = {
    userId: 'hannes',
    userName: '',
};

export const rootReducer = reduceReducers(
    initialState
);

