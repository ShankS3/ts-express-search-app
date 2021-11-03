import request from "supertest";
import createServer from "server";

const app = createServer();

describe("feed routes", () => {
  it("/feeds should respond with 200", async () => {
    await request(app)
      .get("/feeds?page=1&searchText=&sortBy=")
      .expect(200);
  });

  it("/feeds should respond with 400 if no page param found", async () => {
    let response = await request(app).get("/feeds");
    expect(response.status).toEqual(400);
    expect(response.text).toEqual("Required parameter 'page' is missing");
  })
});
