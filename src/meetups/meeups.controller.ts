import { Controller, Get } from '@nestjs/common';
import { MeetupsServices } from './meetups.service';

@Controller("meetups")
export class MeetupsController {
  constructor(private readonly MeetupsServices: MeetupsServices) {}

  @Get()
  getAllMeetups(){
    return this.MeetupsServices.getAllMeetups()
  }
}
