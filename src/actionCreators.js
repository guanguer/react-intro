// @flow

import axios from 'axios';

import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export const setSearchTerm = (searchTerm: string) => ({
    type: SET_SEARCH_TERM,
    payload: searchTerm
});

export const addApiData = (apiData: Show) => ({
    type: ADD_API_DATA,
    payload: apiData
});

export const getApiData = (imdbID: string) => (dispatch: Function) => {
    axios
        .get(`http://localhost:3000/${imdbID}`)
        .then(response => {
            dispatch(addApiData(response.data));
        })
        .catch(err => {
            console.log('axios error', err);
        });
};
