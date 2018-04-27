// @flow
import { Link } from 'react-router-dom';

import React from 'react';

const Header = (props: HeaderProps) => {
    let utilSpace;
    if (props.showSearch) {
        utilSpace = (
            <input
                type="text"
                value={props.searchTerm}
                onChange={props.handleSearchTermChange}
                placeholder="Search"
            />
        );
    } else {
        utilSpace = (
            <h2>
                <Link to="/search">Back</Link>
            </h2>
        );
    }
    return (
        <header>
            <h1>
                <Link to="/">svideo</Link>
            </h1>
            {utilSpace}
        </header>
    );
};

export default Header;
