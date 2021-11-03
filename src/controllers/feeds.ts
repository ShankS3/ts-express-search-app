import { query, Request, Response } from 'express';
import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import { Feed, FeedsResponse } from 'models/feeds';

const page_size: number = 10;

export const getFeeds = async(req: Request, res: Response): Promise<void> => {
  const { page, searchText="", sortBy="" } = req.query as { [key: string]: string};
  let reqPage = parseInt(page,10);
  let [sortOn, sortType] = _.split(sortBy, ',');

  const quotedText = /^"(.+)"$/;
  let searchString: string[] = (quotedText.test(searchText)) ? [searchText.slice(1, searchText.length-1)] : searchText.split(" ");

  let rawData = fs.readFileSync(path.resolve('public/assets', 'feeds.json'));
  let feeds: Feed[] = !_.isEmpty(rawData) ? JSON.parse(rawData.toString()) : [];
  
  let data: Feed[] = _.chain(feeds)
                      .filter(feed => 
                        searchString.every(item => _.includes(_.toLower(feed.name), _.toLower(item))) 
                        || searchString.every(item => _.includes(_.toLower(feed.description), _.toLower(item)))
                      )
                      .orderBy([sortOn], [<'asc'|'desc'>sortType])
                      .value();

  let pageData: Feed[] = data.slice(page_size*(reqPage-1), page_size*reqPage);

  const response: FeedsResponse = {
    data: pageData,
    totalCount: data.length,
    pageSize: Math.ceil(data.length / page_size)
  }

  await res.json(response);
}
