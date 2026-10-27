import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

import { Product } from './entities/product.entity.js';

@Injectable()
export class ProductsService {


  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    
    const {name, description, price} = createProductDto;

    const newProduct = new Product(
      uuidv4(),
      name,
      description,
      price,
    );
    this.products.push(newProduct);
    return newProduct;

  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {

    const product = this.products.find(product => product.id == id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
