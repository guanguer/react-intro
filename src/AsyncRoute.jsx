// @flow

import React, { Component } from 'react';
import Spinner from './Spinner';

class AsyncRoute extends Component<AsyncRouteState, AsyncRouteProps> {
    state = {
        loaded: false
    };
    componentDidMount() {
        this.props.loadingPromise.then(module => {
            this.component = module.default;
            this.setState({ loaded: true });
        });
    }

    component = null;
    render() {
        if (this.state.loaded) {
            return <this.component {...this.props.props} />;
        }
        return <Spinner />;
    }
}

export default AsyncRoute;
