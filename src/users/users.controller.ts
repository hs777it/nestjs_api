import { Controller, Get } from '@nestjs/common';
import { ReviewsService } from 'src/reviews/reviews.service';
import { UsersService } from './users.service';

@Controller({})
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
    private readonly ReviewService: ReviewsService,
  ) {}

  @Get('/api/users')

  // GET: ~/api/users
  public getAllUsers() {
    return this.UsersService.getAll();
  }
}
