import request from 'supertest';
import app from '../server';

describe('Expense API', () => {
  it('should create a new expense', async () => {
    const response = await request(app)
      .post('/api/expenses')
      .send({ amount: 50, category: 'Food', date: '2023-11-01' });
    expect(response.statusCode).toBe(201);
    expect(response.body.amount).toBe(50);
  });
});
