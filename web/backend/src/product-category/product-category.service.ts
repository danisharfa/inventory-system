import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(dto: CreateProductCategoryDto) {
    return await this.prisma.category.create({
      data: {
        name: dto.name,
      },
    });
  }

  async getCategoryList() {
    return await this.prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}
