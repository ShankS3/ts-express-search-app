import request from "supertest";
import createServer from "server";

const app = createServer();

describe("feed routes", () => {
    it("/feeds should respond with 200", (done) => {
        request(app).get("/feeds").expect(200, done);
    });
});
