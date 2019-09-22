import axios from 'axios';
import {
    API_LOGIN,
    API_MESSAGES,
} from '../config/api';

export const api = {
    login: async (userName) => {
        return axios({
            method: 'post',
            url: API_LOGIN,
            data: {
                userName,
            },
        });
    },
    getMessages: async () => {
        return axios({
            method: 'GET',
            url: API_MESSAGES,
        });
    },
    sendMessage: async (message) => {
        return axios({
            method: 'POST',
            url: API_MESSAGES,
            data: message,
        });
    },
};
