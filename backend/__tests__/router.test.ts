import app from "../src/app";
import request from "supertest";

describe('testing router', () => {
    it('should return json', async() => {
        const response = await request(app).get('/');
        expect(response.status).toBe(204)
    })
})