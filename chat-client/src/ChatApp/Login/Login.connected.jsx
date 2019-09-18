import { connect } from 'react-redux';
import { Login } from './Login';
import { login } from '../ducks/login';

const mapDispatchToProps = {
    login,
};

export const LoginConnected = connect(null, mapDispatchToProps)(Login);
