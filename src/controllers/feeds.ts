import { Request, Response } from 'express';
import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import { Feed, FeedsResponse } from 'models/feeds';

const page_size: number = 10;

export const getFeeds = async(req: Request, res: Response): Promise<void> => {
  const { page, searchText="", sortBy="" } = req.query;
  let reqPage = parseInt(<string>page,10);
  let [sortOn, sortType] = _.split(<string>sortBy, ',');

  let rawData = fs.readFileSync(path.resolve('public/assets', 'feeds.json'));
  let feeds: Feed[] = !_.isEmpty(rawData) ? JSON.parse(rawData.toString()) : [];
  feeds.map(feed => new Date(feed.dateLastEdited));
  
  let data: Feed[] = _.chain(feeds)
                      .filter(feed => _.includes(feed.name, searchText)
                                      || _.includes(feed.description, searchText)
                      )
                      .orderBy([sortOn], [<'asc'|'desc'>sortType])
                      .slice(page_size*(reqPage-1), page_size*reqPage)
                      .value();

  await res.json({feeds: data, totalCount: feeds.length} as FeedsResponse);
}
