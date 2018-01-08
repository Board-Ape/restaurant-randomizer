import React from 'react';
import RestaurantCard from '../RestaurantCard';
import { shallow } from 'enzyme';

const mockData = {
  name: "Punch and Daisy",
  data: {
    Cuisines: "Cafe, Coffee and Tea, Sandwich",
    Address: "105 Stuart St, Mullumbimby",
    Rating: "3.8"
  }
};

describe('RestaurantCard', () => {
  let renderedRestaurantContainer;

  beforeEach(() => {
    renderedRestaurantContainer = shallow(
      <RestaurantCard
        restaurants={mockData}
      />
    );
  });

  it('should exist', () => {
    expect(renderedRestaurantContainer).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedRestaurantContainer).toMatchSnapshot();
  });

  it('should render cards', () => {
    const expected = ['name', 'rating', 'cuisine', 'address'].length;

    expect(renderedRestaurantContainer.find('h2').length).toEqual(expected);
  });

});
