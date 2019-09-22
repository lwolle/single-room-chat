import { ActionType } from './ActionType';
import { sendMessage } from './sendMesage';
import { mockStore } from '../../testHelper/mockStore';
import {
    mockApi,
    errorResponse,
} from '../../testHelper/mockApi';


describe('ducks/sendMessage', () => {
    const message = 'the-message';

    describe('action creator', () => {
        it('should create action', async () => {
            const api = mockApi('sendMessage');
            const state = {
                userId: 'user-id',
                messages: [],
            };
            const store = mockStore(state, { api });
            const expected = [{
                type: ActionType.SET_MESSAGES,
                messages: expect.any(Array),
            }];

            await store.dispatch(sendMessage(message));
            expect(api.sendMessage).toHaveBeenCalledWith({
                creatorId: 'user-id',
                text: message,
            });
            const actions = store.getActions();
            expect(actions).toEqual(expected);
        });

        describe('error', () => {
            it('on error', async () => {
                const api = mockApi('sendMessage', errorResponse);
                const state = {
                    userId: 'user-id',
                };
                const store = mockStore(state, { api });
                const expected = [];

                await store.dispatch(sendMessage(message));

                const actions = store.getActions();
                expect(actions).toEqual(expected);
            });
        });
    });
});
