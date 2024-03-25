import { Injectable } from "@nestjs/common";
import { IBlogRepository } from "../domain/blog.repository.interface";
import { Blog } from "../domain/blog.entity";
import { InjectModel } from "@nestjs/sequelize";


@Injectable()
export class SequelizeRepository implements IBlogRepository{

    constructor(@InjectModel(Blog) private readonly blogModel: typeof Blog){}

    async get(id: number): Promise<Blog> {
        return await this.blogModel.findOne({where: {id:id}});
    }
    
    async getAll(): Promise<Blog[]> {
        return await this.blogModel.findAll();
    }

    async delete(id: number): Promise<void> {
        await this.blogModel.destroy({where: {id:id}});
    }
    
    async update(blog: Blog): Promise<Blog> {
        throw new Error("Method not implemented.");
    }
    
    async create(blog: Blog): Promise<void> {
        await this.blogModel.create(blog as any);
    }
    
}