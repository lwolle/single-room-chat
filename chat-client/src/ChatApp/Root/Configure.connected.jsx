import { connect } from 'react-redux';
import { Configure } from './Configure';
import { configureSocket } from '../ducks/configureSocket';

const mapDispatchToProps = { configureSocket };
export const ConfigureConnected = connect(null, mapDispatchToProps)(Configure);
