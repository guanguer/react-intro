// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
    const element = document.getElementById('app');
    if (element !== null) {
        render(<App />, element);
    }
};

renderApp();

if (module.hot) {
    module.hot.accept('./App', () => {
        renderApp();
    });
}
