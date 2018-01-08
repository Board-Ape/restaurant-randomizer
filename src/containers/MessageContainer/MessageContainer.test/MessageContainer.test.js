import React from 'react';
import {MessageContainer, mapStateToProps, mapDispatchToProps} from '../MessageContainer';
import { shallow } from 'enzyme';

describe('MessageContainer tests', () => {
  let messageContainer;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      eventName: [],
      handleSubmit: jest.fn()
    };
    messageContainer = shallow(
      <MessageContainer {...mockProps}/>
    );
  });

  it('should render correctly', () => {
    expect(messageContainer).toBeDefined();
  });

  it('should mactch the snapshot', () => {
    expect(messageContainer).toMatchSnapshot();
  });

  it('should mount with the correct elements', () => {
    expect(messageContainer.find('div').length).toEqual(2);
    expect(messageContainer.find('h2').length).toEqual(1);
    expect(messageContainer.find('form').length).toEqual(1);
    expect(messageContainer.find('input').length).toEqual(2);
  });
});

describe('mapStateToProps tests', () => {
  let mockStore;
  let results;

  beforeEach(() => {
    mockStore = {
      eventName: ['Jorge', 'Jason', 'DJR', 'Sam']
    };
    results = mapStateToProps(mockStore);
  });

  it('should pull message data from the store', () => {
    expect(results.eventName).toEqual(mockStore.eventName);
  });
});

describe('mapDispatchToProps tests', () => {
  let mockDispatch;
  let results;

  beforeEach(() => {
    mockDispatch = jest.fn();
    results = mapDispatchToProps(mockDispatch);
  });

  it('should dispatch correctly when storing messages', () => {
    results.handleSubmit();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
