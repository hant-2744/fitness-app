// backend/src/modules/webhook/webhook.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private webhookService: WebhookService) { }

  @Post('garmin')
  async receiveWebhook(@Body() payload: any) {
    return this.webhookService.handlePayload(payload);
  }
}
