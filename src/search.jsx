import React from 'react';

import data from '../data.json';
import ShowCard from './show-card';

const Search = () => (
    <div className="search">
        {data.shows.map(show => <ShowCard key={show.imdbID} show={show} />)}
    </div>
);

export default Search;
