import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { store } from '../ducks/store/store';
import { AppConnected } from './App.connected';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
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
