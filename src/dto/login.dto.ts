import { createZodDto } from 'nestjs-zod';
import { UserLoginRequestSchema } from '../../contracts';

export class LoginDto extends createZodDto(UserLoginRequestSchema) {}
