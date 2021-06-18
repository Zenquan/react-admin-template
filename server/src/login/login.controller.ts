import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly LoginService: LoginService) {}

  @Post()
  @HttpCode(200)
  login(@Body() { userName, passWord, remember }) {
    return this.LoginService.login(userName, passWord, remember);
  }
}
