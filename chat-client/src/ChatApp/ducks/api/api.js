import axios from 'axios';
import {
    API_LOGIN,
    API_MESSAGES,
    API_SEARCH_MESSAGES,
} from '../../config/api';

export const api = {
    login: (userName) => axios({
        method: 'post',
        url: API_LOGIN,
        data: {
            userName,
        },
    }),
    getMessages: () => axios({
        method: 'GET',
        url: API_MESSAGES,
    }),
    sendMessage: (message) => axios({
        method: 'POST',
        url: API_MESSAGES,
        data: message,
    }),
    search: (searchTerm) => axios({
        method: 'POST',
        url: API_SEARCH_MESSAGES,
        data: {
            query: searchTerm,
        },
    }),
};
