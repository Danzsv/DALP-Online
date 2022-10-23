import { Types } from "mongoose";

export interface Video {
  name: string;
  description: string;
  url: string;
  duration: string;
  foro: Types.ObjectId;
  image: string;
  review: number;
}
