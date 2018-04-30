// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchTerm } from './actionCreators';

class Landing extends Component<SearchFieldProps> {
    goToSearch = (event: SyntheticEvent) => {
        event.preventDefault();
        this.props.history.push('/search');
    };

    browseAll = (event: SyntheticEvent) => {
        this.props.resetSearchTerm();
        this.goToSearch(event);
    };

    render() {
        return (
            <div className="landing">
                <h1>svideo</h1>
                <form onSubmit={this.goToSearch}>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={this.props.handleSearchTermChange}
                        value={this.props.searchTerm}
                    />
                </form>
                <button onClick={this.browseAll}>or Browse All</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
    handleSearchTermChange(event) {
        dispatch(setSearchTerm(event.target.value));
    },
    resetSearchTerm() {
        dispatch(setSearchTerm(''));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
