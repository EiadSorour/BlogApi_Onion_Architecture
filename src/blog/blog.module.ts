import { Module } from "@nestjs/common";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";
import { BlogRepository } from "./blog.repository";


@Module({
    imports: [],
    controllers: [BlogController],
    providers: [
        {
            provide: "Blog_Service",
            useClass: BlogService
        },
        {
            provide: "Blog_Repository",
            useClass: BlogRepository
        }
    ],
    exports: []
})
export class BlogModule{}