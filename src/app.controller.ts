import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getConnection } from 'typeorm';
import { Photo } from './photo/photo.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getAll() {
    return getConnection().manager.find(Photo);
  }
}
