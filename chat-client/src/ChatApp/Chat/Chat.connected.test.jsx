import React from 'react';
import { shallow } from 'enzyme';
import { mockStore } from '../../testHelper/mockStore';
import { ChatConnected } from './Chat.connected';
import { diveTimes } from '../../testHelper/diveTimes';
import { sendMessage } from '../ducks/sendMesage';
import { mockApi } from '../../testHelper/mockApi';

describe('Chat/ChatConnected', () => {
    describe('should pick from state', () => {
        it('userId', () => {
            const state = {
                userId: 'id',
                searchResult: [],
            };
            const store = mockStore(state);

            const root = diveTimes(1)((
                shallow(<ChatConnected store={ store } />)
            ));

            expect(root).toHaveProp('userId', state.userId);
        });

        it('connected', () => {
            const state = {
                connected: 'not-connected',
                searchResult: [],
            };
            const store = mockStore(state);

            const root = diveTimes(1)((
                shallow(<ChatConnected store={ store } />)
            ));

            expect(root).toHaveProp('connected', state.connected);
        });

        it('messages', () => {
            const state = {
                searchResult: [],
                messages: [
                    'message1', 'message2',
                ],
            };
            const store = mockStore(state);

            const root = diveTimes(1)((
                shallow(<ChatConnected store={ store } />)
            ));

            expect(root).toHaveProp('messages', state.messages);
        });

        it('sendMessages', async () => {
            const api = mockApi('sendMessage');
            const state = {
                searchResult: [],
                messages: [],
            };
            const store = mockStore(state, { api });

            const root = diveTimes(1)((
                shallow(<ChatConnected store={ store } />)
            ));

            expect(root).toHaveProp('sendMessage');

            await root.props().sendMessage('message');
            const actionsFromProps = store.getActions();

            store.clearActions();

            await store.dispatch(sendMessage('message'));
            const actionsFromDispatch = store.getActions();

            expect(actionsFromDispatch).toBeDefined();
            expect(actionsFromDispatch).toEqual(actionsFromProps);
        });
    });
});
