"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e2eTemplate = void 0;
const e2eTemplate = (name) => `
import request from 'supertest';
import app from '../../app'; 

describe('${name} E2E', () => {
  it('should GET /${name.toLowerCase()}', async () => {
    const res = await request(app).get('/${name.toLowerCase()}');
    expect(res.statusCode).toEqual(200);
    // Add more assertions here
  });

  it('should POST /${name.toLowerCase()}', async () => {
    const res = await request(app).post('/${name.toLowerCase()}').send({
      // Add payload here
    });
    expect(res.statusCode).toEqual(201);
    // Add more assertions here
  });

  // Add more E2E tests here
});
`;
exports.e2eTemplate = e2eTemplate;
