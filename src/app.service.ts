import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserLoginResponse } from '../contracts';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  login(data: LoginDto): UserLoginResponse {
    return {
      accessToken: data.email + ' & ' + data.password,
    };
  }
}
