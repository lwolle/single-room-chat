import { ActionType } from './ActionType';
import { sendMessage } from './sendMesage';
import { mockStore } from '../../testHelper/mockStore';

describe('ducks/sendMessages', () => {
    const message = 'the-message';

    describe('action creator', () => {
        it('should create action', async () => {
            const state = {
                messages: [],
            };
            const store = mockStore(state);
            const expected = [{
                type: ActionType.SET_MESSAGES,
                messages: expect.any(Array),
            }];

            await store.dispatch(sendMessage(message));
            const actions = store.getActions();
            expect(actions).toEqual(expected);
        });
    });
});
