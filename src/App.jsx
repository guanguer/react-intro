// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AsyncRoute from './AsyncRoute';
import store from './store';
import data from '../data.json';

const NotFound = () => <h1>404</h1>;

const App = () => (
    <Provider store={store}>
        <div className="app">
            <Switch>
                <Route
                    exact
                    path="/"
                    component={props => (
                        <AsyncRoute
                            props={props}
                            loadingPromise={import('./Landing')}
                        />
                    )}
                />
                <Route
                    path="/search"
                    component={props => (
                        <AsyncRoute
                            props={Object.assign({ shows: data.shows }, props)}
                            loadingPromise={import('./Search')}
                        />
                    )}
                />
                <Route
                    path="/details/:id"
                    component={(props: PathParam) => {
                        const selectedShow = data.shows.find(
                            show => props.match.params.id === show.imdbID
                        );
                        return (
                            <AsyncRoute
                                props={Object.assign(
                                    { show: selectedShow },
                                    props
                                )}
                                loadingPromise={import('./Details')}
                            />
                        );
                    }}
                />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Provider>
);

export default App;
