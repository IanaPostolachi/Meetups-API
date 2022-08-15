import { Module } from "@nestjs/common";
import { MeetupsServices } from "./meetups.service";
import { MeetupsController } from "./meeups.controller";

@Module({
    imports: [],
    controllers: [MeetupsController],
    providers: [MeetupsServices],
  })
  export class MeetupsModule {}
  