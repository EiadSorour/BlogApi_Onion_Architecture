import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Eiad:Dody_1422003_Eiad@cluster0.jrfwbtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"), BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
