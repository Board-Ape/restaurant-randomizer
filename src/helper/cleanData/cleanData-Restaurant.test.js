import { cleanData } from './cleanData-Restaurant';
import { mockRestaurantData, mockCleanRestaurantData } from './mockRestaurantData';

describe('cleanData from restaurants tests', () => {

  it('should return an object when cleanData is called', () => {
    const mockCleanData = cleanData(mockRestaurantData);

    expect(typeof mockCleanData).toEqual('object');
  });

  it('should clean restaurant data properly', () => {
    const mockCleanData = cleanData(mockRestaurantData);
    const expected = mockCleanRestaurantData;

    expect(mockCleanData).toEqual(expected);
  });
});
