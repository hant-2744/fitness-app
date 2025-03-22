// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ActivitiesModule } from './modules/activities/activities.module';
import { WebhookModule } from './modules/webhook/webhook.module';

@Module({
  imports: [
    // Kết nối tới MongoDB, lấy URI từ biến môi trường MONGO_URI
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost/fitness-app',
    ),
    AuthModule,
    UsersModule,
    ActivitiesModule,
    WebhookModule,
  ],
})
export class AppModule { }
// Đây là file chính của ứng dụng, nơi chúng ta kết nối tới MongoDB và import các module khác.
