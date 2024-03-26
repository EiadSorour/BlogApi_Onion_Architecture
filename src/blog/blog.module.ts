import { Module } from "@nestjs/common";
import { BlogController } from "./api/blog.controller";
import { BlogService } from "./application/blog.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { SequelizeRepository } from "./infrastructure/Sequelize/sequelize.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Blog, BlogSchema } from "./infrastructure/Mongoose/mongoose.entity";
import { MongooseRepository } from "./infrastructure/Mongoose/mongoose.repository";
// import { Blog } from "./infrastructure/Sequelize/sequelize.entity";


@Module({
    imports: [MongooseModule.forFeature([ {name: Blog.name ,  schema: BlogSchema} ])],
    controllers: [BlogController],
    providers: [
        {
            provide: "Blog_Service",
            useClass: BlogService
        },
        // {
        //     provide: "Sequelize_Repository",
        //     useClass: SequelizeRepository
        // },
        {
            provide: "Mongoose_Repository",
            useClass: MongooseRepository
        }
    ],
    exports: [MongooseModule]
})
export class BlogModule { }