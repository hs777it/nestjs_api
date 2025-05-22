import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { JWTPayloadType,AccessTokenType } from 'src/utils/types';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Create a new user
   * @param registerDto data to create a new user
   * @returns JWT (access token)
   */
  public async register(registerDto: RegisterDto) :Promise<AccessTokenType> {
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
    const accessToken = await this.generateJWT({
      id: newUser.id,
      userType: newUser.userType,
    });
    return { accessToken };
  }

  /**
   * Login with email and password
   * @param loginDto data to login a user
   * @returns JWT (access token)
   */
  public async login(loginDto: LoginDto) :Promise<AccessTokenType> {
    const { email, password } = loginDto;

    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) throw new BadRequestException('Invalid email or password');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new BadRequestException('Invalid password');

    // @TODO Generate JWT token
    const accessToken = await this.generateJWT({
      id: user.id,
      userType: user.userType,
    });
    // return user;
    return { accessToken };
  }

  /**
   * Generate Json Web Token
   * @param payload JWT payload
   * @returns token
   */
  private generateJWT(payload: JWTPayloadType): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
