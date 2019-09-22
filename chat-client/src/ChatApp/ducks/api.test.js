import axios from 'axios';
import {
    API_MESSAGES,
    API_LOGIN,
} from '../config/api';
import { api } from './api';

jest.mock('axios');

describe('ChatApp/config/api', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('sendMessage ', () => {
        it('should call axios', async () => {
            await api.sendMessage('message');

            expect(axios).toHaveBeenCalledWith({
                method: 'POST',
                url: API_MESSAGES,
                data: 'message',
            });
        });
    });

    describe('getMessages ', () => {
        it('should call axios', async () => {
            await api.getMessages();

            expect(axios).toHaveBeenCalledWith({
                method: 'GET',
                url: API_MESSAGES,
            });
        });
    });

    describe('login ', () => {
        it('should call axios', async () => {
            await api.login('user-name');

            expect(axios).toHaveBeenCalledWith({
                method: 'post',
                url: API_LOGIN,
                data: {
                    userName: 'user-name',
                },
            });
        });
    });
});
