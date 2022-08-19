import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetupsModule } from './meetups/meetups.module';

@Module({
  imports: [
    MeetupsModule,
    MongooseModule.forRoot(
      'mongodb+srv://Iana:mongodb@cluster0.siwvf.mongodb.net/meetups?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
