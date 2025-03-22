import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../modules/users/users.service';
import { ActivitiesService } from '../modules/activities/activities.service';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcryptjs';
import { UserDocument } from '../modules/users/user.schema';

async function bootstrap() {
  // Tạo context ứng dụng Nest
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);
  const activitiesService = app.get(ActivitiesService);

  const numberOfUsers = 10;
  const numberOfActivitiesPerUser = 5;

  for (let i = 0; i < numberOfUsers; i++) {
    // Sinh dữ liệu cho user
    const email = faker.internet.email();
    const plainPassword = faker.internet.password({ length: 8 });
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    const fullname = faker.person.fullName();

    // Tạo user và in thông tin đăng nhập để test
    const user = await usersService.create({
      email,
      passwordHash: hashedPassword,
      fullname,
    });
    console.log(`Created user: ${user.email} - Password: ${plainPassword}`);

    // Ép kiểu user thành UserDocument để có thể truy cập _id
    const userId = (user as UserDocument)._id as string;

    // Tạo các activity cho user
    for (let j = 0; j < numberOfActivitiesPerUser; j++) {
      const activityTypes = [
        'running',
        'cycling',
        'swimming',
        'walking',
        'hiking',
      ];
      const type = faker.helpers.arrayElement(activityTypes);

      // Sinh thời gian hoạt động
      const startTime = faker.date.past({ years: 1 });
      const duration = faker.number.int({ min: 600, max: 7200 }); // thời lượng tính bằng giây
      const endTime = new Date(startTime.getTime() + duration * 1000);

      // Sinh dữ liệu hoạt động
      const distance = faker.number.int({ min: 1000, max: 20000 });
      const calories = faker.number.int({ min: 100, max: 1000 });
      const averageHeartRate = faker.number.int({ min: 60, max: 180 });
      const steps = faker.number.int({ min: 500, max: 15000 });

      const activityData = {
        userId, // sử dụng userId đã lấy từ _id
        type,
        startTime,
        endTime,
        duration,
        distance,
        calories,
        averageHeartRate,
        steps,
      };

      await activitiesService.create(activityData);
      console.log(`  Created activity [${type}] for user: ${user.email}`);
    }
  }
  console.log('Seeding completed!');
  await app.close();
}

bootstrap();
