import { Inject, Injectable } from "@nestjs/common";
import { IBlogService } from "../domain/blog.service.interface";
import { Blog } from "../domain/blog.entity";
import { IBlogRepository } from "../domain/blog.repository.interface";


@Injectable()
export class BlogService implements IBlogService{
    constructor(@Inject("Sequelize_Repository") private readonly blogRepository: IBlogRepository){}
    
    async getBlog(id: number): Promise<Blog> {
        return await this.blogRepository.get(id);
    }

    async getAllBlogs(): Promise<Blog[]> {
        return await this.blogRepository.getAll();
    }

    async deleteBlog(id: number): Promise<void> {
        await this.blogRepository.delete(id);
    }

    async updateBlog(blog: Blog): Promise<Blog> {
        return await this.blogRepository.update(blog);
    }
    
    async createBlog(blog: Blog): Promise<void> {
        return await this.blogRepository.create(blog);
    }


}