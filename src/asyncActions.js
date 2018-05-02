// @flow

import axios from 'axios';

import { addApiData } from './actionCreators';

const getApiData = (imdbID: string) => (dispatch: Function) => {
    axios.get(`http://localhost:3000/${imdbID}`).then(response => {
        dispatch(addApiData(response.data));
    });
};

export default getApiData;
