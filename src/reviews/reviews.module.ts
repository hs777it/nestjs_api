import { Module, forwardRef } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { ReviewController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewsService],
  exports: [ReviewsService],
  imports: [forwardRef(() => UsersModule)],
})
export class ReviewsModule {}
