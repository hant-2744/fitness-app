// backend/src/modules/users/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop()
  googleId?: string;

  @Prop()
  fullname: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
// Đây là file schema của User, chúng ta sử dụng Mongoose để tạo schema này.
