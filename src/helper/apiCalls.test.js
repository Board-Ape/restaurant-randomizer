import {getNearbyRestaurants, postCurrentLocation} from './apiCalls';

const mockData = {
  name: 'rest',
  date: 'tomorrow',
  when: 'predict',
  from: 'came',
  who: 'damn'
};

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockData)
  })
);

describe('getNearbyRestaurants tests', () => {

  it('should be called correctly', () => {
    expect(getNearbyRestaurants).toBeAFunction;
  });

  it('should return an object', async () => {
    const response = await getNearbyRestaurants();

    expect(typeof response).toEqual('object');
  });

  it('should throw an error if the GET fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );
    const response = await getNearbyRestaurants();
    const expected = Error('Fetch Restaurants Failed');

    expect(response).toEqual(expected);
  });
});

describe('postCurrentLocation tests', () => {

  it('should be called correctly', () => {
    expect(postCurrentLocation).toBeAFunction;
  });

  it('should return an object', async () => {
    const response = await postCurrentLocation();

    expect(typeof response).toEqual('object');
  });

  it('should throw an error if POST fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );
    const response = await postCurrentLocation(mockData);
    const expected = Error('Fetch Location Failed');

    expect(response).toEqual(expected);
  });

});
