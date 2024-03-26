import { IBlog } from "./blog.entity.interface";

export interface IBlogRepository{
    get(id:number): Promise<IBlog>;
    getAll(): Promise<IBlog[]>;
    delete(id:number): Promise<void>;
    update(blog: IBlog): Promise<IBlog>;
    create(blog: IBlog): Promise<void>;
}