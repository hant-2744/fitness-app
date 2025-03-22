// backend/src/modules/activities/activities.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) { }

  @Get()
  async getActivities(@Query() query: any) {
    return this.activitiesService.findAll(query);
  }
}
