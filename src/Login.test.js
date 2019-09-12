import React from 'react';
import { configure, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Login from './Login';

describe('Login', () => {
    
    test('should correctly render Login', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
    
    let result;
    test('should render a div when bound to null', () => {
        result = shallow(<Login data={null} />);
        expect(result.type()).toEqual('div');
    })
})
