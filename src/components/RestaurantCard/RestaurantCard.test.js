import React from 'react';
import RestaurantCard from './RestaurantCard';
import { shallow } from 'enzyme';

const mockData = {sam: 'Singer', status: 'Sickly'};

describe('RestaurantCard', () => {
  let renderedRestaurantContainer;

  beforeEach(() => {
    renderedRestaurantContainer = shallow(<RestaurantCard data={mockData}/>);
  });

  it('should exist', () => {
    expect(renderedRestaurantContainer).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedRestaurantContainer).toMatchSnapshot();
  });

  it('should render cards', () => {
    const expected = [mockData].length;

    expect(renderedRestaurantContainer.find('h3').length).toEqual(expected);
  });

});
