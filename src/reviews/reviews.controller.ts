import { Controller, Get } from '@nestjs/common';
import { ReviewService } from './reviews.service';

@Controller({})
export class ReviewController {
  constructor(private readonly ReviewService: ReviewService) {}

  @Get('/api/reviews')
  // GET: ~/api/reviews
  public getAllReviews() {
    return this.ReviewService.getAll();
  }
}
