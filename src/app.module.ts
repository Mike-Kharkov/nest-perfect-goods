import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './photo/photo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
