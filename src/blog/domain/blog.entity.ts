import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Blog extends Model {
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
