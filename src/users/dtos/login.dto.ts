import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @MaxLength(250)
  email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
