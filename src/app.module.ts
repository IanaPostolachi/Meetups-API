import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetupsServices } from './meetups/meetups.service';
import { MeetupsController } from './meetups/meeups.controller';

@Module({
  imports: [],
  controllers: [AppController, MeetupsController],
  providers: [AppService,MeetupsServices],
})
export class AppModule {}
