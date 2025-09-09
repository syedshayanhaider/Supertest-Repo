
const request = require('supertest');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Tests', () => {
  test('GET /posts/1 should return a single post with id = 1', async () => {
    const response = await request(BASE_URL).get('/posts/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('body'); 
    expect(response.body).toHaveProperty('userId');
  });
});

