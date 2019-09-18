import {
    initialState,
    rootReducer,
} from './rootReducer';

describe('ducks/rootReducer', () => {
    describe('initialState', () => {
        it('should have shape', () => {
            expect(initialState).toEqual({
                userId: '',
                userName: '',
                messages: [],
            });
        });
    });

    describe('rootReducer', () => {
        it('should return initialState', () => {
            const newState = rootReducer();
            expect(newState).toEqual(initialState);
        });
    });
});
