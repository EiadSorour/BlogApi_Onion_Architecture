import { Controller, Get, HttpCode, Inject, Param } from "@nestjs/common";
import { IBlogService } from "./interfaces/service";

@Controller("/api/blog")
export class BlogController {
    constructor(@Inject("Blog_Service") private readonly blogService: IBlogService) { }

    @Get("/")
    @HttpCode(200)
    async getAllBlogs() {
        return this.blogService.getAllBlogs();
    }

    @Get("/:id")
    async article(@Param("id") id:number){
        return this.blogService.getBlog(id);
    }
}