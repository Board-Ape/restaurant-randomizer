import eventNameReducer from '../event-reducer';
import * as actions from '../../actions';

describe('Reducers', () => {

  it.skip('should have an initial state', () => {
    const expected = [];

    expect(eventNameReducer(undefined, [])).toEqual(expected);
  });

  it.skip('should return a new state when an action is called', () => {
    const mockObject = {name: 'Sam', id: 0};
    const expected = {name: 'Sam', id: 0};

    expect(eventNameReducer([], actions.addEventName(mockObject))).toEqual(expected);
  });

});
