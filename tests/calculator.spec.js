const request = require('supertest');
const { expect } = require('chai');

const app = require('../app');

describe('Calculator', () => {
  it('should return Unauthorized error', async () => {
    await request(app).get('/').expect(401);
  });

  it('should return Bad Request', async () => {
    await request(app).get('/').auth('admin', 'admin').expect(400);
  });

  it('should return Bad Request', async () => {
    await request(app).get('/not-found').auth('admin', 'admin').expect(404);
  });

  it('should calculate ', async () => {
    const response = await request(app)
      .get(`/?expression=${encodeURIComponent('1 2 +')}`)
      .auth('admin', 'admin')
      .expect(200);

    expect(response.body.result).to.be.equals(3);
  });
});
