import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { IBlog } from 'src/blog/domain/blog.entity.interface';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog implements IBlog {
    
    @Prop({type: mongoose.Schema.Types.ObjectId ,auto:true})
    id: number;
    
    @Prop({isRequired:true})
    title: string;
    
    @Prop({isRequired:true})
    content: string;
    
    @Prop({isRequired:true})
    author: string;
    
    @Prop({isRequired:true})
    rating: number;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);