import { Controller, Get } from '@nestjs/common';

@Controller({})
export class ReviewController {
  @Get('/api/reviews')

  // GET: ~/api/reviews
  public getAllReviews() {
    return [
      { id: 1, rating: 5, comment: 'good' },
      { id: 2, rating: 4, comment: 'very good' },
    ];
  }
}
