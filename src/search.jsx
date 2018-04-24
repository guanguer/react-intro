import React from 'react';
import styled from 'styled-components';

import data from '../data.json';
import ShowCard from './show-card';

const ShowList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: stretch;
`;

class Search extends React.Component {
    state = {
        searchTerm: ''
    };

    handleSearchTermChange = event => {
        this.setState({ searchTerm: event.target.value });
    };

    isSearchTermInTitleOrDescription = show =>
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
