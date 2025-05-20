import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-products.dto';
import { UpdateProductDto } from './dtos/update-products.dto';
type ProductType = { id: number; title: string; price: number };

@Controller('api/products')
export class ProductsController {
  private products: ProductType[] = [
    { id: 1, title: 'book', price: 10 },
    { id: 2, title: 'pen', price: 5 },
    { id: 3, title: 'laptop', price: 400 },
  ];

  /* ----------------- POST ~/api/products ---------------- */
  @Post()
  public createNewProduct(
    // @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    // useGlobalPipes in main.ts
    @Body()
    body: CreateProductDto,
  ) {
    const newProduct: ProductType = {
      id: this.products.length + 1,
      title: body.title,
      price: body.price,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  /* --------------- GET: ~/api/products --------------- */
  @Get()
  public getAllProducts() {
    return this.products;
  }

  /* --------------- GET: ~/api/products/:id --------------- */
  @Get(':id')
  public getSingleProduct(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }
  /* --------------- PUT: ~/api/products/:id --------------- */
  @Put(':id')
  public updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('Product not found');

    console.log(body);

    return { message: 'product updated successfully with id:' + id };
  }

  /* --------------- DELETE: ~/api/products/:id --------------- */
  @Delete(':id')
  public deleteProduct(@Param('id', ParseIntPipe) id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return { message: 'product deleted' };
  }

  // @Delete(':id')
  // public deleteProduct(@Param('id') id: string) {
  //   const product = this.products.find((p) => p.id === parseInt(id));
  //   if (!product) throw new NotFoundException('Product not found');
  //   return { message: 'product deleted' };
  // }
}
