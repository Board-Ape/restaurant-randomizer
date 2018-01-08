import React from 'react';
import {RestaurantContainer, mapStateToProps, mapDispatchToProps } from '../RestaurantContainer';
import { shallow } from 'enzyme';

describe('RestaurantContainer tests', () => {
  let restaurantContainer;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      restaurantNames: [],
      currentLocation: [],
      storeRestaurants: jest.fn(),
      storeLocation: jest.fn()
    };
    restaurantContainer = shallow(
      <RestaurantContainer {...mockProps}/>
    );
  });

  it('should render correctly', () => {
    expect(restaurantContainer).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(restaurantContainer).toMatchSnapshot();
  });

  it('should mount with the correct elements', () => {
    const expected = ['hello', 'there', 'okay', 'maybe', 'good', 'lodash'].length;

    expect(restaurantContainer.find('div').length).toEqual(expected);
  });
});

describe('mapStateToProps tests', () => {
  let mockStore;
  let results;

  beforeEach(() => {
    mockStore = {
      restaurantNames: ['Giordini', 'Masaki', 'Juniper'],
      currentLocation: ['23.2349823', '12.309123']
    };
    results = mapStateToProps(mockStore);
  });

  it('should pull restaurants data from the store', () => {
    expect(results.restaurantNames).toEqual(mockStore.restaurantNames);
  });

  it('should pull location data from the store', () => {
    expect(results.currentLocation).toEqual(mockStore.currentLocation);
  });
});

describe('mapDispatchToProps tests', () => {
  let mockDispatch;
  let results;

  beforeEach(() => {
    mockDispatch = jest.fn();
    results = mapDispatchToProps(mockDispatch);
  });

  it('should dispatch correctly when storing restaurants', () => {
    results.storeRestaurants();

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should dispatch correctly when storing location', () => {
    results.storeLocation();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
