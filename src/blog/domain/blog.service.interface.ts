import { Blog } from "./blog.entity";

export interface IBlogService{
    getBlog(id:number): Promise<Blog>;
    getAllBlogs(): Promise<Blog[]>;
    deleteBlog(id:number): Promise<void>;
    updateBlog(blog: Blog): Promise<Blog>;
    createBlog(blog: Blog): Promise<void>;
}