// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import data from '../data.json';
import ShowCard from './show-card';

const ShowList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: stretch;
`;

type State = { searchTerm: string };

class Search extends Component<{}, State> {
    state: State = {
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
                <header>
                    <h1>svideo</h1>
                    <input
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.handleSearchTermChange}
                        placeholder="Search"
                    />
                </header>
                <ShowList>
                    {data.shows
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
