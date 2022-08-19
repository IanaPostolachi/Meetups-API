import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MeetupsServices } from './meetups.service';

@Controller('meetups')
export class MeetupsController {
  constructor(private readonly MeetupsServices: MeetupsServices) {}

  @Get()
  getAllMeetups() {
    return this.MeetupsServices.getAllMeetups();
  }

  @Post()
async   addMeetup(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('address') address: string,
    @Body('image') image: URL,
  ) {
    await this.MeetupsServices.addMeetup(title,image,address,description);
  }

  
  @Get(':id')
  getOneMeetupById(@Param('id') meetupId: string) {
    return this.MeetupsServices.getMeetupById(meetupId);
  }
}
