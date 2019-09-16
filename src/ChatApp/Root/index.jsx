import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';

export const bootstrap = () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
}

