import {Controller, Get, Req, Body, Param} from '@nestjs/common';
import {Request} from 'express';
import { AppService } from './app.service';

// 데코레이터는 기능을 첨가할때 사용

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:8000/cats/hello
  @Get('hello')
  getHello(@Req() req : Request, @Body() body, @Param() param): string {

    return this.appService.getHello();
  }
}
