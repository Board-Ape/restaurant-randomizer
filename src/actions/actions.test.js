import * as actions from './index.js';

describe('action', () => {

  it('should create an action when adding an event', () => {
    const name = ['string', 'problems'];
    const id = '098';
    const expected = {
      type: 'ADD_EVENT_NAME',
      name,
      id
    };

    expect(actions.addEventName(name, id)).toEqual(expected);
  });

  it('should create an action when making a restaurant array', () => {
    const restaurants = ['Traps', 'Biceps', 'Quads'];
    const expected = {
      type: 'MAKE_RESTAURANT_ARRAY',
      restaurants
    };

    expect(actions.makeRestaurantArray(restaurants)).toEqual(expected);
  });

  it('should create an action when making a restaurant array', () => {
    const restaurants = ['Traps', 'Biceps', 'Quads'];
    const expected = {
      type: 'MAKE_RESTAURANT_ARRAY',
      restaurants
    };

    expect(actions.makeRestaurantArray(restaurants)).toEqual(expected);
  });

  it('should create an action when adding a favorite', () => {
    const favorites = ['Georges', 'Moores', 'Taylors'];
    const expected ={
      type: 'ADD_FAVORITE',
      favorites
    };

    expect(actions.addFavorite(favorites)).toEqual(expected);
  });

  it('should create an action when deleting a favorite', () => {
    const favorites = ['Georges', 'Moores', 'Taylors'];
    const expected = {
      type: 'DELETE_FAVORITE',
      favorites
    };

    expect(actions.deleteFavorite(favorites)).toEqual(expected);
  });

});
