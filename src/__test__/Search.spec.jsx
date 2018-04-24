import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import data from '../../data.json';
import Search from '../search';
import ShowCard from '../show-card';

Enzyme.configure({ adapter: new Adapter() });

describe('Search', () => {
    it('Search renders correctly', () => {
        const component = shallow(<Search />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('Search should render correct amount of shows', () => {
        const component = shallow(<Search />);
        expect(data.shows.length).toEqual(component.find(ShowCard).length);
    });

    it('Search should render correct amount of shows based on search term ', () => {
        const component = shallow(<Search />);
        const searchWord = 'black';
        component
            .find('input')
            .simulate('change', { target: { value: searchWord } });
        const shows = data.shows.filter(
            show =>
                `${show.title} ${show.description}`
                    .toUpperCase()
                    .indexOf(searchWord.toUpperCase()) >= 0
        );
        expect(component.find(ShowCard).length).toEqual(shows.length);
    });
});
