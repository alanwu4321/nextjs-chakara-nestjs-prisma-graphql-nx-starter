import { Injectable } from '@nestjs/common';
import { APP_NAME } from '@lunar/constants';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + APP_NAME;
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }
}
