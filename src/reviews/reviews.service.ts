import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ReviewsService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly UsersService: UsersService,
  ) {}
  public getAll() {
    return [
      { id: 1, rating: 5, comment: 'good' },
      { id: 2, rating: 4, comment: 'very good' },
    ];
  }
}
