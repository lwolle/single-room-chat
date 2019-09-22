import { mockStore } from '../../testHelper/mockStore';
import { configureSocket } from './configureSocket';
import { ActionType } from './ActionType';

describe('ducks/configureSocket', () => {
    const createStore = (state = {}) => {
        const ws = {
            configure: jest.fn(),
        };
        const store = mockStore(state, { ws });
        return { store, ws };
    };

    it('should call ws.configure', () => {
        const { store, ws } = createStore();
        store.dispatch(configureSocket());

        expect(ws.configure).toHaveBeenCalledWith({
            connect: expect.any(Function),
            disconnect: expect.any(Function),
            receive: expect.any(Function),
        });
    });

    it('handler.connect should dispatch action', () => {
        const { store, ws } = createStore();
        store.dispatch(configureSocket());

        const { connect } = ws.configure.mock.calls[0][0];

        connect();

        expect(store.getActions()).toEqual([{
            type: ActionType.SET_WS_CONNECTED,
            connected: true,
        }]);
    });

    it('handler.disconnect should dispatch action', () => {
        const { store, ws } = createStore();
        store.dispatch(configureSocket());

        const { disconnect } = ws.configure.mock.calls[0][0];

        disconnect();

        expect(store.getActions()).toEqual([{
            type: ActionType.SET_WS_CONNECTED,
            connected: false,
        }]);
    });

    it('handler.receive should dispatch action', () => {
        const { store, ws } = createStore({ messages: [] });
        store.dispatch(configureSocket());

        const { receive } = ws.configure.mock.calls[0][0];

        receive({});

        expect(store.getActions()).toEqual([{
            type: ActionType.SET_MESSAGES,
            messages: expect.any(Array),
        }]);
    });
});
