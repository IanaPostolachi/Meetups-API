import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meetup } from './meetups.model';

@Injectable()
export class MeetupsServices {
  //Injecting the model into the Schema for the Mongoose
  constructor(
    @InjectModel('Meetup') private readonly meetupModel: Model<Meetup>,
  ) {}

  getAllMeetups() {}

  async addMeetup(title: string, image: URL, address: string, description: string) {
    const newMeetup = new this.meetupModel({
      title,
      image,
      address,
      description,
    });
    const result = await newMeetup.save() 
    // return result
  }

  getMeetupById(meetupId: string) {}
}
