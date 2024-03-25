import { Blog } from "./blog.entity";

export interface IBlogRepository{
    get(id:number): Promise<Blog>;
    getAll(): Promise<Blog[]>;
    delete(id:number): Promise<void>;
    update(blog: Blog): Promise<Blog>;
    create(blog: Blog): Promise<void>;
}