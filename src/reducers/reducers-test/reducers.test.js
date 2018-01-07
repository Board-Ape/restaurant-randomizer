import eventName from '../event-reducer';
import restaurantNames from '../event-reducer';
import currentLocation from '../event-reducer';
import * as actions from '../../actions';

describe('currentLocation reducer tests', () => {
  it('should return the initial store', () => {
    const expected = [];

    expect(currentLocation(undefined, {})).toEqual(expected);
  });

  it('should return a new store with event data', () => {
    const mockLocationData = [];
    const expected = [...mockLocationData];
    const action = actions.fetchLocationSuccess(mockLocationData);

    expect(currentLocation(undefined, action)).toEqual(expected);
  });
});

describe('restaurantNames reducer tests', () => {
  it('should return the initial store', () => {
    const expected = [];

    expect(restaurantNames(undefined, {})).toEqual(expected);
  });

  it('should return a new store with restaurant data', () => {
    const mockRestaurantData = [];
    const expected = [...mockRestaurantData];
    const action = actions.makeRestaurantArray(mockRestaurantData);

    expect(restaurantNames(undefined, action)).toEqual(expected);
  });
});

describe('eventName reducer tests', () => {
  it('should return the initial store', () => {
    const expected = [];

    expect(eventName(undefined, {})).toEqual(expected);
  });

  it('should return a new store with event data', () => {
    const mockEventData = [];
    const mockID = '100';
    const expected = [{"id": [], "name": "100"}];
    const action = actions.addEventName(mockID, mockEventData);

    expect(eventName(undefined, action)).toEqual(expected);
  });
});
