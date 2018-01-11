import React from 'react';
import { FavoritesContainer, mapStateToProps } from '../FavoritesContainer';
import { shallow } from 'enzyme';

describe('FavoritesContainer tests', () => {
  let favoritesContainer;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      favorites: []
    };

    favoritesContainer = shallow(
      <FavoritesContainer {...mockProps}/>
    );
  });

  it('should render correctly', () => {
    expect(favoritesContainer).toBeDefined();
  });

  it('should mactch the snapshot', () => {
    expect(favoritesContainer).toMatchSnapshot();
  });

  it('should mount with the correct elements', () => {
    expect(favoritesContainer.find('div').length).toEqual(2);
  });
});

describe('mapStateToProps tests', () => {
  let mockStore;
  let results;

  beforeEach(() => {
    mockStore = {
      favorites: ['GreenBean', 'Bose', 'Juniors', 'ChickFilA']
    };
    results = mapStateToProps(mockStore);
  });

  it('should pull message data from the store', () => {
    expect(results.favorites).toEqual(mockStore.favorites);
  });
});
