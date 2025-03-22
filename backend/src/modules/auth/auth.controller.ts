// backend/src/modules/auth/auth.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  // Đăng ký tài khoản
  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('fullname') fullname: string,
  ) {
    return this.authService.register(email, password, fullname);
  }

  // Đăng nhập
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.validateUser(email, password);
    return this.authService.login(user);
  }

  // Endpoint quên mật khẩu có thể triển khai gửi email reset...
  @Post('forgot-password')
  async forgotPassword(@Body('email') email: string) {
    // TODO: triển khai gửi mail reset mật khẩu
    return { message: 'Chức năng quên mật khẩu đang được phát triển.' };
  }
}
