import { IBlog } from "./blog.entity.interface";

export interface IBlogService{
    getBlog(id:number): Promise<IBlog>;
    getAllBlogs(): Promise<IBlog[]>;
    deleteBlog(id:number): Promise<void>;
    updateBlog(blog: IBlog): Promise<IBlog>;
    createBlog(blog: IBlog): Promise<void>;
}