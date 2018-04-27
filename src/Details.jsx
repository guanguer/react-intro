// @flow

import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Spinner from './Spinner';

class Details extends Component<DetailProps, DetailState> {
    state: DetailState = {
        apiData: {
            rating: ''
        }
    };

    componentDidMount() {
        axios
            .get(`http://localhost:3000/${this.props.show.imdbID}`)
            .then(response => {
                this.setState({ apiData: response.data });
            });
    }

    render() {
        const { title, year, poster, description, trailer } = this.props.show;
        let ratingComponent;
        if (this.state.apiData.rating) {
            ratingComponent = <h3>{this.state.apiData.rating}</h3>;
        } else {
            ratingComponent = <Spinner />;
        }
        return (
            <div className="details">
                <Header />
                <section>
                    <h1>{title}</h1>
                    <h2>({year})</h2>
                    {ratingComponent}
                    <img
                        src={`/img/posters/${poster}`}
                        alt={`${title} Show Poster`}
                    />
                    <p>{description}</p>
                </section>
                <div>
                    <iframe
                        title={`Trailer for ${title}`}
                        src={`https://www.youtube-nocookie.com/embed/${trailer}?
                            rel=0&amp;controls=0&amp;showinfo=0`}
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
        );
    }
}

export default Details;
