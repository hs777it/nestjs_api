import { Module, forwardRef } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { ReviewController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';

@Module({
  controllers: [ReviewController],
  providers: [ReviewsService],
  exports: [ReviewsService],
  imports: [forwardRef(() => UsersModule),TypeOrmModule.forFeature([Review])],
})
export class ReviewsModule {}
