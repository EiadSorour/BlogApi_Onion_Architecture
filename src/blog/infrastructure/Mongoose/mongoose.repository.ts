import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IBlogRepository } from "src/blog/domain/blog.repository.interface";
import { Blog } from "./mongoose.entity";


@Injectable()
export class MongooseRepository implements IBlogRepository{

    constructor(@InjectModel(Blog.name) private readonly blogModel: Model<Blog> ){}

    async get(id: number): Promise<Blog> {
        return await this.blogModel.findOne({where: {id:id}});
    }
    
    async getAll(): Promise<Blog[]> {
        return await this.blogModel.find();
    }

    async delete(id: number): Promise<void> {
        await this.blogModel.deleteOne({id: id});
    }
    
    async update(blog: Blog): Promise<Blog> { 
        throw new Error("Method not implemented.");
    }
    
    async create(blog: Blog): Promise<void> {
        await this.blogModel.create(blog);
    }
    
}