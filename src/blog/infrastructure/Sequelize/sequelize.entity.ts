import { Column, Table, Model } from "sequelize-typescript";
import { IBlog } from "src/blog/domain/blog.entity.interface";

@Table
export class Blog extends Model implements IBlog{
    @Column({ primaryKey: true , autoIncrement: true })
    id: number;

    @Column
    title: string;
    
    @Column
    content: string;
    
    @Column
    author: string;
    
    @Column
    rating: number
}