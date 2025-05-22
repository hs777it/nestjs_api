import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  // Post: ~/api/users/auth/register
  @Post('auth/register')
  public register(@Body() body: RegisterDto) {
    return this.UsersService.register(body);
  }

  // Post: ~/api/users/auth/login
  @Post('auth/login') // 201
  @HttpCode(HttpStatus.OK) // 200
  public login(@Body() body: LoginDto) {
    return this.UsersService.login(body);
  }
}
