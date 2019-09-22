import React from 'react';
import { shallow } from 'enzyme';
import { mockStore } from '../../../testHelper/mockStore';
import { diveTimes } from '../../../testHelper/diveTimes';
import { SearchFieldConnected } from './SearchField.connected';
import { startSearch } from '../../ducks/startSearch';
import { clearSearch } from '../../ducks/clearSeach';

describe('Chat/Search/SearchField', () => {
    describe('should bind', () => {
        it('startSearch', async () => {
            const store = mockStore(null);

            const root = diveTimes(1)((
                shallow(<SearchFieldConnected store={ store } />)
            ));

            expect(root).toHaveProp('startSearch');

            await root.props().startSearch('search-term');
            const actionsFromProps = store.getActions();

            store.clearActions();

            await store.dispatch(startSearch('search-term'));
            const actionsFromDispatch = store.getActions();

            expect(actionsFromDispatch).toBeDefined();
            expect(actionsFromDispatch).toEqual(actionsFromProps);
        });

        it('clearSearch', async () => {
            const store = mockStore(null);

            const root = diveTimes(1)((
                shallow(<SearchFieldConnected store={ store } />)
            ));

            expect(root).toHaveProp('clearSearch');

            await root.props().clearSearch();
            const actionsFromProps = store.getActions();

            store.clearActions();

            await store.dispatch(clearSearch());
            const actionsFromDispatch = store.getActions();

            expect(actionsFromDispatch).toBeDefined();
            expect(actionsFromDispatch).toEqual(actionsFromProps);
        });
    });
});
