import { Module } from "@nestjs/common";
import { MeetupsServices } from "./meetups.service";
import { MeetupsController } from "./meetups.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { MeetupSchema } from "./meetups.model";

@Module({
    imports: [MongooseModule.forFeature([{name:'Meetup',schema:MeetupSchema}])],
    controllers: [MeetupsController],
    providers: [MeetupsServices],
  })
  export class MeetupsModule {}
  