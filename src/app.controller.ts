import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './dto/login.dto';
import { UserLoginResponse } from '../contracts';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  login(@Body() dto: LoginDto): UserLoginResponse {
    return this.appService.login(dto);
  }
}
