const axios = require('axios');
const moment = require('moment');
const { getRecommendations } = require('./app');

jest.mock('axios');

const mockMoviesData = [
  {
    name: 'Zootopia',
    rating: 92,
    genres: ['Action & Adventure', 'Animation', 'Comedy'],
    showingTime: ['19:00:00+11:00', '21:00:00+11:00'],
  },
  {
    name: 'Shaun The Sheep',
    rating: 80,
    genres: ['Animation', 'Comedy'],
    showingTime: ['19:00:00+11:00'],
  },
];

describe('getRecommendations', () => {
  beforeEach(async () => {
    await  axios.get.mockResolvedValue({ data: mockMoviesData });
  });

  test('returns movie recommendations with the correct format', async () => {
    expect(mockMoviesData).toEqual([
        {
          name: 'Zootopia',
          rating: 92,
          genres: ['Action & Adventure', 'Animation', 'Comedy'],
          showingTime: ['19:00:00+11:00', '21:00:00+11:00'],
        },
        {
          name: 'Shaun The Sheep',
          rating: 80,
          genres: ['Animation', 'Comedy'],
          showingTime: ['19:00:00+11:00'],
        },
      ]);
  });
});
