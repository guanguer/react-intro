// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import ShowCard from './ShowCard';

const ShowList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: stretch;
`;

class Search extends Component<SearchProps, SearchState> {
    state: SearchState = {
        searchTerm: ''
    };

    handleSearchTermChange = (
        event: SyntheticKeyboardEvent<HTMLInputElement>
    ) => {
        this.setState({ searchTerm: event.currentTarget.value });
    };

    isSearchTermInTitleOrDescription = (show: Show) =>
        `${show.title} ${show.description}`
            .toUpperCase()
            .indexOf(this.state.searchTerm.toUpperCase()) >= 0;

    render() {
        return (
            <div className="search">
                <Header
                    searchTerm={this.state.searchTerm}
                    showSearch
                    handleSearchTermChange={this.handleSearchTermChange}
                />
                <ShowList>
                    {this.props.shows
                        .filter(show =>
                            this.isSearchTermInTitleOrDescription(show)
                        )
                        .map(show => (
                            <ShowCard key={show.imdbID} show={show} />
                        ))}
                </ShowList>
            </div>
        );
    }
}

export default Search;
