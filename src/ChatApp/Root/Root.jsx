import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { store } from '../ducks/store';
import { AppConnected } from './App.connected';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        height: 100%;
        margin: 0;
    }
  
    #root {
        height: 100%;
    }
`;

export const Root = () => (
    <Provider store={ store }>
        <GlobalStyle />
        <AppConnected />
    </Provider>
);
