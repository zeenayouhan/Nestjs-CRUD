import { Controller, Post, Body } from "@nestjs/common";
import { ProductService } from "./product.service";


@Controller('products')
export class productController{
    constructor(private productService: ProductService){  }
    
    @Post()
    addProduct(
        @Body('title') prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number,
        ):any{
        const generatedId=this.productService.insertProduct(prodTitle,prodDesc,prodPrice);
        return {id:generatedId  };

    }
    
}