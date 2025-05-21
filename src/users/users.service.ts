import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ReviewsService } from 'src/reviews/reviews.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => ReviewsService))
    private readonly ReviewsService: ReviewsService,
  ) {}
  public getAll() {
    return [
      { id: 1, email: 'hs777it@gmail.com' },
      { id: 2, email: 'ahmed87@gmail.com' },
    ];
  }
}
