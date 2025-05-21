import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-products.dto';
import { UpdateProductDto } from './dtos/update-products.dto';
import { ProductService } from './products.service';

@Controller('api/products')
export class ProductsController {
  // @IMPORTANT NOTE: this is considered a bad practice, we will use dependency injection to fix this
  // private ProductService: ProductService = new ProductService();

  // private ProductService: ProductService;
  // constructor(ProductService: ProductService) {this.ProductService = ProductService;}
  // OR
  constructor(private readonly ProductService: ProductService) {}

  // GET: ~/api/products
  @Get()
  public getAllProducts() {
    return this.ProductService.getAll();
  }

  // GET: ~/api/products/:id
  @Get(':id')
  public getSingleProduct(@Param('id', ParseIntPipe) id: number) {
    return this.ProductService.getOneBy(id);
  }

  // POST ~/api/products
  @Post()
  public createNewProduct(@Body() body: CreateProductDto) {
    return this.ProductService.createProduct(body);
  }

  // PUT: ~/api/products/:id
  @Put(':id')
  public updateProduct(
    @Param('id', ParseIntPipe) id: string,
    @Body() body: UpdateProductDto,
  ) {
    return this.ProductService.update(id, body);
  }

  // DELETE: ~/api/products/:id
  @Delete(':id')
  public deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.ProductService.delete(id);
  }
}
