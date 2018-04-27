// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import data from '../data.json';

const NotFound = () => <h1>404</h1>;

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route
                    path="/search"
                    component={props => (
                        <Search shows={data.shows} {...props} />
                    )}
                />
                <Route
                    path="/details/:id"
                    component={(props: PathParam) => (
                        <Details
                            show={data.shows.find(
                                show => props.match.params.id === show.imdbID
                            )}
                            {...props}
                        />
                    )}
                />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
