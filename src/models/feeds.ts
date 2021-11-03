export class Feed {
  constructor (
    public name: string,
    public image: string,
    public description: string,
    public dateLastEdited: string
  ) {}
}

export class FeedsResponse {
  constructor (
    public feeds: Feed[],
    public totalCount: number
  ) {}
}
