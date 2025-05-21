import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './prodcuts/product.entity';
import { ProductModule } from './prodcuts/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductModule,
    ReviewsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'nestjs-app-db',
      username: 'postgres',
      password: '027772',
      synchronize: true, // only in dev
      entities: [Product],
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
