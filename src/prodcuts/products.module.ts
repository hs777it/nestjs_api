import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Product } from './product.entity';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
  imports: [UsersModule, TypeOrmModule.forFeature([Product])],
})
export class ProductModule {}
