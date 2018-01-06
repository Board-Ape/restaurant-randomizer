import * as actions from './index.js';

describe('action', () => {

  it('should create an action when adding an event', () => {
    const name = ['string', 'problems']
    const id = '098'
    const expected = {
      type: 'ADD_EVENT_NAME',
      name,
      id
    };

    expect(actions.addEventName(name, id)).toEqual(expected)
  });

  it('should create an action when location is fetched', () => {
    const location = ['94, 100']
    const expected ={
      type: 'FETCH_LOCATION_SUCCESS',
      location
    };

    expect(actions.fetchLocationSuccess(location)).toEqual(expected)
  });

  it('should create an action when making a restaurant array', () => {
    const restaurants = ['Traps', 'Biceps', 'Quads']
    const expected = {
      type: 'MAKE_RESTAURANT_ARRAY',
      restaurants
    };

    expect(actions.makeRestaurantArray(restaurants)).toEqual(expected)
  });

});
