// backend/src/modules/activities/activities.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Activity, ActivityDocument } from './activity.schema';
import { Model } from 'mongoose';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity.name) private activityModel: Model<ActivityDocument>,
  ) {}

  async create(activityData: Partial<Activity>): Promise<Activity> {
    const createdActivity = new this.activityModel(activityData);
    return createdActivity.save();
  }

  async findAll(query?: any): Promise<Activity[]> {
    return this.activityModel.find(query).exec();
  }
}
