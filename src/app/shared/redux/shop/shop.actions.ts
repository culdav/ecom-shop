export class FetchProducts {
  static readonly type = '[Shop] Get products';

  constructor(public category: string) {}
}
