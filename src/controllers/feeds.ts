import { RequestHandler, Request, Response, NextFunction } from 'express';
import { Feed } from 'models/feeds';

const feeds: Feed[] = [
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

export const getFeeds = () => feeds;

