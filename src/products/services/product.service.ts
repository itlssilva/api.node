import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from '../models/products.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly model: Model<ProductModel>){}

    async get(): Promise<ProductModel[]>{
        return await this.model.find().exec();
    }

    async create(model: ProductModel): Promise<ProductModel>{
        const product = new this.model(model);
        return await product.save();
    }

    async getById(id): Promise<ProductModel[]>{
        const product = await this.model.find({_id: id}).exec();
        return product;
    }

    async delete(id){
        const product = await this.model.deleteOne({_id: id}).exec();
    }
}