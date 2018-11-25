import { Get, Controller, Post, Body, Delete } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { ProductModel } from '../models/products.model';
import { ProductService } from '../services/product.service';
import { Router } from 'express';

@Controller('v1/products')
export class ProductsController {
    constructor(private readonly service: ProductService){}

    @Post()
    async create(@Body() model: ProductModel){
        this.service.create(model);
    }

    @Get()
    async get(): Promise<ProductModel[]>{
        return this.service.get();
    }

    @Get('getById')
    async getById(@Body() _id: string): Promise<ProductModel[]>{
        return this.service.getById(_id);
    }

    @Post('delete')
    async delete(@Body() _id: string){
        this.service.delete(_id);
    }
}