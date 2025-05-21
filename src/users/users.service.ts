import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getAll() {
    return [
      { id: 1, email: 'hs777it@gmail.com' },
      { id: 2, email: 'ahmed87@gmail.com' },
    ];
  }
}
