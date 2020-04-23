import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { productController } from './product.controller';


@Module({
  imports: [],
  controllers: [productController],
  providers: [ProductService],
})
export class ProductModule {}
