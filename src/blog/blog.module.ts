import { Module } from "@nestjs/common";
import { BlogController } from "./api/blog.controller";
import { BlogService } from "./application/blog.service";
import { SequelizeRepository } from "./infrastructure/sequelize.repository";
import { Blog } from "./domain/blog.entity";
import { SequelizeModule } from "@nestjs/sequelize";


@Module({
    imports: [SequelizeModule.forFeature([Blog])],
    controllers: [BlogController],
    providers: [
        {
            provide: "Blog_Service",
            useClass: BlogService
        },
        {
            provide: "Sequelize_Repository",
            useClass: SequelizeRepository
        }
    ],
    exports: [SequelizeModule]
})
export class BlogModule { }