import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ReviewsService } from './reviews.service';

@Controller({})
export class ReviewController {
  constructor(
    private readonly ReviewService: ReviewsService,
    private readonly UsersService: UsersService,
  ) {}

  @Get('/api/reviews')
  // GET: ~/api/reviews
  public getAllReviews() {
    return this.ReviewService.getAll();
  }
}
