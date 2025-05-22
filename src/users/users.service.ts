import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { RegisterDto } from './dtos/register.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  /**
   * Create a new user
   * @param registerDto data to create a new user
   * @returns JWT (access token)
   */
  public async register(registerDto: RegisterDto) {
    const { email, password, username } = registerDto;

    const userExists = await this.usersRepository.findOne({ where: { email } });
    if (userExists) throw new BadRequestException('User already exists');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let newUser = this.usersRepository.create({
      email,
      username,
      password: hashedPassword,
    });

    newUser = await this.usersRepository.save(newUser);
    // @TODO Generate JWT token
    // @TODO Send verification email
    return newUser;
  }
}
