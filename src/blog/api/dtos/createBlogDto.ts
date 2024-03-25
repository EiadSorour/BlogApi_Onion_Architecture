import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBlogDto{
    
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    content: string;
    
    @IsString()
    @IsNotEmpty()
    author: string;
    
    @IsNumber()
    @IsNotEmpty()
    rating: number;
}