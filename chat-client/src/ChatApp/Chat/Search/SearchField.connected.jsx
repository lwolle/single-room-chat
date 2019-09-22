import { connect } from 'react-redux';
import { SearchField } from './SearchField';
import { clearSearch } from '../../ducks/clearSeach';
import { startSearch } from '../../ducks/startSearch';

const mapDispatchToProps = {
    startSearch,
    clearSearch,
};

export const SearchFieldConnected = connect(null, mapDispatchToProps)(SearchField);
