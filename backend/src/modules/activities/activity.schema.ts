// backend/src/modules/activities/activity.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ActivityDocument = Activity & Document;

@Schema({ timestamps: true })
export class Activity {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  type: string; // running, cycling, etc.

  @Prop({ required: true })
  startTime: Date;

  @Prop()
  endTime: Date;

  @Prop()
  duration: number; // seconds

  @Prop()
  distance: number; // meters

  @Prop()
  calories: number;

  @Prop()
  averageHeartRate: number;

  @Prop()
  steps: number;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
