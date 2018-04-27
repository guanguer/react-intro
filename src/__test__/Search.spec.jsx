import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import data from '../../data.json';
import Search from '../Search';
import Header from '../Header';
import ShowCard from '../ShowCard';

Enzyme.configure({ adapter: new Adapter() });

describe('Search', () => {
    it('Search renders correctly', () => {
        const component = shallow(<Search shows={data.shows} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('Search should render correct amount of shows', () => {
        const component = shallow(<Search shows={data.shows} />);
        expect(data.shows.length).toEqual(component.find(ShowCard).length);
    });
});
