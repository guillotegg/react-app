import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

test('should correctly render Login', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});