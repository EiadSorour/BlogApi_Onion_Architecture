import { Module } from "@nestjs/common";
import { BlogController } from "./api/blog.controller";
import { BlogService } from "./application/blog.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { SequelizeRepository } from "./infrastructure/Sequelize/sequelize.repository";
import { Blog } from "./infrastructure/Sequelize/sequelize.entity";


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