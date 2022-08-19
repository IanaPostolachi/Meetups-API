import * as mongoose from 'mongoose';

export const MeetupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  image: URL,
});

export interface Meetup {
    id: string;
    title: string;
    address: string;
    description: string;
    image: URL
}
