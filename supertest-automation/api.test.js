
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

  test('POST /posts should create a new post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const response = await request(BASE_URL)
      .post('/posts')
      .send(newPost)
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newPost);
    expect(response.body).toHaveProperty('id');
  });

  test('PUT /posts/1 should update the post with id = 1', async () => {
    const updatedPost = {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    };

    const response = await request(BASE_URL)
      .put('/posts/1')
      .send(updatedPost)
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(updatedPost);
  });

  test('PATCH /posts/1 should partially update the post with id = 1', async () => {
    const partialUpdate = {
      title: 'patched title',
    };

    const response = await request(BASE_URL)
      .patch('/posts/1')
      .send(partialUpdate)
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('title', partialUpdate.title);
  });

  test('DELETE /posts/1 should delete the post with id = 1', async () => {
    const response = await request(BASE_URL).delete('/posts/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({});
  });

});

