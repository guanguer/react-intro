// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './Header';
import ShowCard from './ShowCard';

const ShowList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: stretch;
`;

const isSearchTermInTitleOrDescription = (show, searchTerm) =>
    `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(
        searchTerm.toUpperCase()
    );

const Search = (props: SearchProps) => (
    <div className="search">
        <Header showSearch />
        <ShowList>
            {props.shows
                .filter(show =>
                    isSearchTermInTitleOrDescription(show, props.searchTerm)
                )
                .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </ShowList>
    </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);
