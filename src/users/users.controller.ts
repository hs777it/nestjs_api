import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({})
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get('/api/users')

  // GET: ~/api/users
  public getAllUsers() {
    return this.UsersService.getAll();
  }
}
