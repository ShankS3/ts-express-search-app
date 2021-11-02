import request from "supertest";

describe("server checks", () => {
    it("server is created without error", done => {
        request(app).get("/").expect(200, done);
    });
});