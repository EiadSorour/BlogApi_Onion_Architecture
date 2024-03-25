import { Injectable } from "@nestjs/common";
import { IBlogRepository } from "./interfaces/repository";
import { IBlog } from "./interfaces/entity";

@Injectable()
export class BlogRepository implements IBlogRepository{
    constructor(){}
    
    get(id: number): Promise<IBlog> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<IBlog[]> {
        console.log("i am here");
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(blog: IBlog): Promise<IBlog> {
        throw new Error("Method not implemented.");
    }
    create(blog: IBlog): Promise<void> {
        throw new Error("Method not implemented.");
    }

}