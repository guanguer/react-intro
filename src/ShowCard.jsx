// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
    flex-basis: 100%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    overflow: hidden;
    color: black;
    text-decoration: none;

    @media (min-width: 790px) {
        flex-basis: 44%;
    }

    @media (min-width: 1100px) {
        flex-basis: 32%;
    }
`;

const Image = styled.img`
    width: 46%;
    height: 100%;
    float: left;
    margin-right: 5px;
`;

class ShowCard extends Component<DetailProps> {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { imdbID, poster, title, year, description } = this.props.show;
        return (
            <Wrapper className="show-card" to={`/details/${imdbID}`}>
                <Image
                    src={`/img/posters/${poster}`}
                    alt={`${title} Show Poster`}
                />
                <div>
                    <h3>{title}</h3>
                    <h4>({year})</h4>
                    <p>{description}</p>
                </div>
            </Wrapper>
        );
    }
}

export default ShowCard;
