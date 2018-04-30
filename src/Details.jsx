// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Spinner from './Spinner';
import { getApiData } from './actionCreators';

class Details extends Component<DetailProps> {
    componentDidMount() {
        if (!this.props.rating) {
            this.props.getApiData(this.props.imdbID);
        }
    }

    render() {
        const { title, year, poster, description, trailer } = this.props.show;
        let ratingComponent;
        if (this.props.rating) {
            ratingComponent = <h3>{this.props.rating}</h3>;
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

const mapStateToProps = (state: DetailState, ownProps: { show: Show }) => {
    const apiData = state.apiData[ownProps.show.imdbID]
        ? state.apiData[ownProps.show.imdbID]
        : {};
    return {
        rating: apiData.rating
    };
};

const mapDispatchToProps = (dispatch: Function, ownProps: { show: Show }) => ({
    getApiData() {
        dispatch(getApiData(ownProps.show.imdbID));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
