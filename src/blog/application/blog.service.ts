import { Inject, Injectable } from "@nestjs/common";
import { IBlogService } from "../domain/blog.service.interface";
import { IBlog } from "../domain/blog.entity.interface";
import { IBlogRepository } from "../domain/blog.repository.interface";


@Injectable()
export class BlogService implements IBlogService{
    constructor(@Inject("Mongoose_Repository") private readonly blogRepository: IBlogRepository){}
    
    async getBlog(id: number): Promise<IBlog> {
        return await this.blogRepository.get(id); 
    }

    async getAllBlogs(): Promise<IBlog[]> {
        return await this.blogRepository.getAll();
    }

    async deleteBlog(id: number): Promise<void> {
        await this.blogRepository.delete(id);
    }

    async updateBlog(blog: IBlog): Promise<IBlog> {
        return await this.blogRepository.update(blog);
    }
    
    async createBlog(blog: IBlog): Promise<void> {
        return await this.blogRepository.create(blog);
    }


}