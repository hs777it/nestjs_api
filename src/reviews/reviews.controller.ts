import { Controller, Get } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller({})
export class ReviewController {
  constructor(private readonly ReviewService: ReviewsService) {}

  @Get('/api/reviews')
  // GET: ~/api/reviews
  public getAllReviews() {
    return this.ReviewService.getAll();
  }
}
