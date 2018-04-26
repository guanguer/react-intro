// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './landing';
import Search from './search';

const NotFound = () => <h1>404</h1>;

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/search" component={Search} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
