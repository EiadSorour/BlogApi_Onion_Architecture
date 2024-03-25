import { Inject, Injectable } from "@nestjs/common";
import { IBlogService } from "./interfaces/service";
import { IBlog } from "./interfaces/entity";
import { IBlogRepository } from "./interfaces/repository";


@Injectable()
export class BlogService implements IBlogService{
    constructor(@Inject("Blog_Repository") private readonly blogRepository: IBlogRepository){}
    
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