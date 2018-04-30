// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';
import data from '../../data.json';
import store from './../store';
import { setSearchTerm } from './../actionCreators';

Enzyme.configure({ adapter: new Adapter() });

test('Search renders correctly', () => {
    const component = shallow(
        <UnwrappedSearch searchTerm="" shows={data.shows} />
    );
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(
        <UnwrappedSearch searchTerm="" shows={data.shows} />
    );
    expect(data.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render correct amount of shows based on search', () => {
    const searchWord = 'New York';
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
        <Provider store={store}>
            <MemoryRouter>
                <Search shows={data.shows} />
            </MemoryRouter>
        </Provider>
    );
    const showCount = data.shows.filter(show =>
        `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(
            searchWord.toUpperCase()
        )
    ).length;
    expect(component.find('.show-card').length).toEqual(showCount);
});
