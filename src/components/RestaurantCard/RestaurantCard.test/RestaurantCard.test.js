import React from 'react';
import { RestaurantCard, mapStateToProps, mapDispatchToProps} from '../RestaurantCard';
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
    expect(renderedRestaurantContainer.find('div').length).toEqual(2);
    expect(renderedRestaurantContainer.find('h1').length).toEqual(1);
    expect(renderedRestaurantContainer.find('h2').length).toEqual(4);
    expect(renderedRestaurantContainer.find('span').length).toEqual(1);
  });

  describe('mapStateToProps tests', () => {
    let mockStore;
    let results;

    beforeEach(() => {
      mockStore = {
        favorites: ['Giordini', 'Masaki', 'Juniper'],
        addFavorite: jest.fn(),
        deleteFavorite: jest.fn()
      };
      results = mapStateToProps(mockStore);
    });

    it('should pull restaurants data from the store', () => {
      expect(results.favorites).toEqual(mockStore.favorites);
    });
  });

  describe('mapDispatchToProps tests', () => {
    let mockDispatch;
    let results;

    beforeEach(() => {
      mockDispatch = jest.fn();
      results = mapDispatchToProps(mockDispatch);
    });

    it('should dispatch correctly when storing favorites', () => {
      results.addFavorite();

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should dispatch correctly when deleting favorites', () => {
      results.deleteFavorite();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

});
