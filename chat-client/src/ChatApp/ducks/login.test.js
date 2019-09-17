import { login } from './login';
import { ActionType } from './ActionType';

const dispatch = jest.fn();
const fakeApi = {
    login: jest.fn(() => ({
        ok: true,
        body: {
            userId: 'user-id',
        },
    })),
    getMessages: jest.fn(() => ({
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
    })),
};
describe('login', () => {
    it('should call api.login', () => {
        const thunkAction = login('user-name');
        thunkAction(dispatch, null, { api: fakeApi });

        expect(fakeApi.login).toHaveBeenCalledWith('user-name');
    });

    it('should dispatch setUser action', async () => {
        const thunkAction = login('user-name');
        await thunkAction(dispatch, null, { api: fakeApi });

        expect(dispatch).toHaveBeenCalledWith({
            type: ActionType.SET_USER,
            userName: 'user-name',
            userId: 'user-id',
        });
    });
});
