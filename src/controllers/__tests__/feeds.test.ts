import request from "supertest";
import createServer from "server";
import fs from 'fs';
import { getFeeds } from "controllers/feeds";
import { Feed, FeedsResponse } from "models/feeds";

const app = createServer();

describe('GET /feeds', () => {
  it('should return 200 & valid response', async() => {
    let response = await request(app)
                          .get('/feeds?page=1&searchText=&sortBy=')
                          .expect(200)
                          .then((res) => {
                              if(!res.ok) throw new Error();
                              return res;
                          })
                          .catch(err => err);

    expect(response.body).toMatchObject({totalCount: 100});
  });

  it('should fetch json file from path', async () => {
    const mockRequest: any = {
      query: {}
    };

    const mockResponse: any = {
      json: jest.fn(),
      status: jest.fn()
    }

    const readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
    await getFeeds(mockRequest, mockResponse);
    expect(readFileSyncSpy).toBeCalledTimes(1);
    expect(readFileSyncSpy).toBeCalledWith(expect.stringMatching(/public\/assets\/feeds.json$/))
  });
});
