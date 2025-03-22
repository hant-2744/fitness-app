// backend/src/modules/webhook/webhook.service.ts
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);

  // Hàm xử lý payload gửi từ Garmin
  async handlePayload(payload: any): Promise<any> {
    this.logger.log('Received webhook payload: ' + JSON.stringify(payload));
    // TODO: Parse payload, lưu dữ liệu vào DB (Activities module)
    return { status: 'success' };
  }
}
