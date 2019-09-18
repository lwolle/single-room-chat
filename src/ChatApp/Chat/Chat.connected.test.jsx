import { mockStore } from '../../testHelper/mockStore';
import { ChatConnected } from './Chat.connected';
import React from 'react';
import { shallow } from 'enzyme';
import { diveTimes } from '../../testHelper/diveTimes';

describe('Chat/ChatConnected', () => {
    describe('should pick from state', () => {
        it('userId', () => {
            const state = {
                userId: 'id',
            };
            const store = mockStore(state);

            const root = diveTimes(1)((
                shallow(<ChatConnected store={ store } />)
            ));

            expect(root).toHaveProp('userId', state.userId);
        });

        it('messages', () => {
            const state = {
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
    });
});
