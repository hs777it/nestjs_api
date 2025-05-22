import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  constructor() {}
  public getAll() {
    return [
      { id: 1, rating: 5, comment: 'good' },
      { id: 2, rating: 4, comment: 'very good' },
    ];
  }
}
