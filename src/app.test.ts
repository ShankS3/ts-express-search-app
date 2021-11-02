import request from "supertest";
import createServer from "app";

const app = createServer();

describe("server checks", () => {
    it("server is created without error", done => {
        request(app).get("/").expect(200, done);
    });
});