import { connect } from 'react-redux';
import { App } from './App';

const mapStateToProps = (state) => ({
    userId: state.userId,
    userName: state.userName,
});

export const AppConnected = connect(mapStateToProps)(App);
