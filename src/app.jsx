import React from 'react';
import { render } from 'react-dom';

const MyComponent = function MyComponent() {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'My first React component')
    );
};

render(React.createElement(MyComponent), document.getElementById('app'));
