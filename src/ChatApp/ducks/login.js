import { setUser } from './setUser';

export const login = (userName) => async (dispatch, getState, { api }) => {
    const response = await api.login(userName);

    if (response.ok) {
        const { userId } = response.body;
        dispatch(setUser(userId, userName));
    }
};
