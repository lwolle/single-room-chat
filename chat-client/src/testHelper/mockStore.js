import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

export const mockStore = (
    initialState = undefined,
    extraArgument = {},
    additionalMiddleware = [],
) => {
    const middleware = [
        thunk.withExtraArgument(extraArgument),
        ...additionalMiddleware,
    ];

    const mockStore = configureMockStore(middleware);
    return mockStore(initialState);
};
