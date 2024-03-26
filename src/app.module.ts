import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'eiad1422003',
      database: 'blogs_onion_architecture',
      autoLoadModels: true,
      synchronize: true
    }), BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
