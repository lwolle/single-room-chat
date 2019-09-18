import React from 'react';
import { shallow } from 'enzyme/build';
import { LoginConnected } from './Login.connected';
import { login } from '../ducks/login';
import { mockStore } from '../../testHelper/mockStore';

describe('Login/LoginConnected', () => {
    it('should bind login', () => {
        const store = mockStore();
        const root = shallow(<LoginConnected store={ store } />);
        expect(root).toHaveProp('login', expect.any(Function));
    });

    it('assert action result', async () => {
        const fakeResponse = {
            ok: true,
            body: {
                userId: 'the-id',
            },
        };

        const fakeGetMessagesResponse = {
            ok: true,
            body: {
                messages: [
                    {
                        id: 1,
                        creatorId: 2,
                        text: 'the-message',
                    },
                ],
            },
        };

        const fakeApi = {
            login: jest.fn(() => fakeResponse),
            getMessages: jest.fn(() => fakeGetMessagesResponse),
        };

        const store = mockStore(null, { api: fakeApi });
        const root = shallow(<LoginConnected store={ store } />);

        await root.props().login('the-name');
        const storeAfterProps = store.getState();

        store.clearActions();

        await store.dispatch(login('the-name'));
        const storeAfterDispatch = store.getState();

        expect(storeAfterProps).toBeDefined();
        expect(storeAfterDispatch).toEqual(storeAfterProps);
    });
});
