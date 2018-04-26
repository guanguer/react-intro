// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex-basis: 100%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    overflow: hidden;

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

const ShowCard = (props: { show: Show }) => (
    <Wrapper>
        <Image
            src={`img/posters/${props.show.poster}`}
            alt={`${props.show.title} Show Poster`}
        />
        <div>
            <h3>{props.show.title}</h3>
            <h4>({props.show.year})</h4>
            <p>{props.show.description}</p>
        </div>
    </Wrapper>
);

export default ShowCard;
