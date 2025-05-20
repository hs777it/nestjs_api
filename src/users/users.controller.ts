import { Controller, Get } from '@nestjs/common';

@Controller({})
export class UsersController {
  @Get('/api/users')

  // GET: ~/api/users
  public getAllUsers() {
    return [
      { id: 1, email: 'hs777it@gmail.com' },
      { id: 2, email: 'ahmed87@gmail.com' },
    ];
  }
}
