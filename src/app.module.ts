import { Module } from '@nestjs/common';
import { ProductModule } from './prodcuts/products.module';
import { ReviewModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductModule, ReviewModule, UsersModule],
  
})
export class AppModule {}
