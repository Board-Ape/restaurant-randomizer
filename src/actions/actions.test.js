import * as actions from './index.js';

describe('actions', () => {
  it('should create an action to add an event name', () => {
    const name = 'Sam'
    const id = '123'
    const expectedAction = {
      type: types.ADD_EVENT_NAME,
      name,
      id
    }
    expect(actions.addEventName(name)).toEqual(expectedAction)
  })
})
