import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Post } from "@nestjs/common";
import { IBlogService } from "../domain/blog.service.interface";
import { CreateBlogDto } from "./dtos/createBlogDto";

@Controller("/api/blog")
export class BlogController {
    constructor(@Inject("Blog_Service") private readonly blogService: IBlogService) { }

    @Get("/")
    @HttpCode(200)
    async getAllBlogs() {
        const blogs = await this.blogService.getAllBlogs();
        return {status: "success" , data: {blogs}};
    }

    @Get("/:id")
    async getBlog(@Param("id") id:number){
        const blog = await this.blogService.getBlog(id);
        return {status: "success" , data: {blog}};
    }

    @Post("/")
    async createBlog(@Body() createBlogDto: CreateBlogDto){
        await this.blogService.createBlog(createBlogDto as any);
        return {status: "success" , data: {message: "blog created successfully"}};
    }

    @Delete("/:id")
    async deleteBlog(@Param("id") id: number){
        await this.blogService.deleteBlog(id);
        return {status: "success" , data: {message: "blog deleted successfully"}};
    }
}