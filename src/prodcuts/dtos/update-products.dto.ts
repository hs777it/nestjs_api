import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
export class UpdateProductDto {
  @IsString({ message: 'title must be a string' })
  @IsNotEmpty({ message: 'title is required' })
  //   @MinLength(3)
  //   @MaxLength(120)
  @Length(3, 120, { message: 'title must be between 3 and 120 characters' })
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0, { message: 'price must be greater than 0' })
  @IsOptional()
  price?: number;
}
