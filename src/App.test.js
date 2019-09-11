import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Grid', () => {
  test('should correctly render App', () => {
    const wrapper = shallow(<App />); 
    expect(wrapper).toMatchSnapshot();
  });

  let result;
  test('should render a div when bound to null', () => {
      result = shallow(<App data={null} />);
      expect(result.type()).toEqual('div');
  })
});