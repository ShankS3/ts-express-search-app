import request from "supertest";
import createServer from "server";
import fs from 'fs';
import { getFeeds } from "controllers/feeds";

const app = createServer();

const expected = [
  {
    "name": "Customer Assurance Liaison",
    "image": "http://lorempixel.com/640/480",
    "description": "Vel voluptatem id repudiandae aut omnis. Deleniti tempore aliquam quia magnam eos. Sunt saepe nisi delectus.",
    "dateLastEdited": "2018-05-19T12:33:25.545Z"
  },
  {
    "name": "Dynamic Infrastructure Designer",
    "image": "http://lorempixel.com/640/480",
    "description": "Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim. Ducimus ea soluta esse modi quia.",
    "dateLastEdited": "2017-11-28T04:59:13.759Z"
  },
  {
    "name": "Regional Configuration Designer",
    "image": "http://lorempixel.com/640/480",
    "description": "Rerum voluptatibus deleniti. Et quo ea magnam quisquam aliquam sequi sed praesentium. Similique est maiores. Tempora sed ad dolores error deserunt possimus sed perferendis molestiae. Doloribus fuga velit ipsum voluptatem ut ducimus.",
    "dateLastEdited": "2018-07-27T21:33:53.485Z"
  },
];

describe('GET /feeds', () => {
  it('should return 200 & valid response', (done) => {
    request(app)
      .get('/feeds')
      .expect(200)
      .end((err, res) => {
          if(err) return done(err);
          expect(res.body).toEqual(expected);
          done();
      });
  });

  it('should fetch json file from path', () => {
    const readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
    getFeeds();
    expect(readFileSyncSpy).toBeCalledWith("*/ts-express-search-app/public/assets/feeds.json");
  })
});
