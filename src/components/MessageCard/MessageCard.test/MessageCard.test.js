import React from 'react';
import MessageCard from '../MessageCard';
import { shallow } from 'enzyme';

const mockData = {another: 'Day', some: 'Other'};

describe('MessageCard', () => {
  let renderedMessageCard;

  beforeEach(() => {
    renderedMessageCard = shallow(
      <MessageCard
        data={mockData}
        eventName={['hello', 'there']}
      />
    );
  });

  it('should exist', () => {
    expect(renderedMessageCard).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedMessageCard).toMatchSnapshot();
  });

  it('should render new message cards', () => {
    const expected = [mockData].length;

    expect(renderedMessageCard.find('.message-display').length).toEqual(expected);
  });
});
