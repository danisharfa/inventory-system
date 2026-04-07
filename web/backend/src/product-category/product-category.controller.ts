import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';

@Controller('category')
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}

  @Post()
  createCategory(@Body() dto: CreateProductCategoryDto) {
    return this.productCategoryService.createCategory(dto);
  }

  @Get()
  getCategoryList() {
    return this.productCategoryService.getCategoryList();
  }
}
