import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<Header />)
  })
  it('should exist', () => {
    expect(renderedApp).toBeDefined()
  });

  it('should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });

});
