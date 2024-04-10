import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { GetPopularProductsDto } from "./dto/get-popular-products.dto";
import { GetProductsDto, ProductPaginator } from "./dto/get-products.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {} 

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async getProducts(@Query() query: GetProductsDto): Promise<ProductPaginator> {
    return this.productsService.getProducts(query);
  }

  @Get(":slug")
  async getProductBySlug(@Param("slug") slug: string): Promise<Product> {
    return this.productsService.getProductBySlug(slug);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}

@Controller("popular-products")
export class PopularProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getProducts(@Query() query: GetPopularProductsDto): Promise<Product[]> {
    return this.productsService.getPopularProducts(query);
  }
}
