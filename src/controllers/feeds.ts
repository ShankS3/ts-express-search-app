import fs from 'fs';
import path from 'path';
import { Feed } from 'models/feeds';

export const getFeeds = () => {
  let rawData = fs.readFileSync(path.resolve('public/assets', 'feeds.json'));
  const feeds: Feed[] = rawData.length !== 0 ? JSON.parse(rawData.toString()) : [];
  return { feeds: feeds.slice(0,3), totalCount: feeds.length };
}
