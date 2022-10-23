import { Types } from "mongoose";

export interface Forum {
  comment: string;
  content: string;
  answers: Types.ObjectId[];
}
