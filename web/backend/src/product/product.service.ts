import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(dto: CreateProductDto) {
    return await this.prisma.product.create({
      data: {
        name: dto.name,
        description: dto.description || null,
        categoryId: dto.categoryId,
        price: dto.price,
        quantity: dto.quantity,
      },
    });
  }

  async getProductList() {
    return await this.prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  async getProduct(id: number) {
    return await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }

  async updateProduct(id: number, dto: UpdateProductDto) {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: dto,
        include: {
          category: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Product ${id} not found`);
    }
  }

  async deleteProduct(id: number) {
    try {
      return await this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Product ${id} not found`);
    }
  }
}
