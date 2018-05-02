// @flow

import moxios from 'moxios';

import { setSearchTerm, addApiData } from '../actionCreators';
import getApiData from '../asyncActions';

const blackMirror = {
    rating: '5.6',
    title: 'Black Mirror',
    year: '2011–',
    description:
        'A television anthology series that shows the dark side of life and technology.',
    poster: 'bm.jpg',
    imdbID: 'tt2085059',
    trailer: 'jDiYGjp5iFg'
};

test('setSearchTerm', () => {
    expect(setSearchTerm('black')).toMatchSnapshot();
});

test('addApiData', () => {
    expect(addApiData(blackMirror)).toMatchSnapshot();
});

test('getApiData', (done: Function) => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
        getApiData(blackMirror.imdbID)(dispatchMock);
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request
                .respondWith({
                    status: 200,
                    response: blackMirror
                })
                .then(() => {
                    expect(request.url).toEqual(
                        `http://localhost:3000/${blackMirror.imdbID}`
                    );
                    expect(dispatchMock).toBeCalledWith(
                        addApiData(blackMirror)
                    );
                    done();
                });
        });
    });
});
