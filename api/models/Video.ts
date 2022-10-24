import { Schema, model } from "mongoose";
import MongooseDelete = require("mongoose-delete");

import { Video } from "../interfaces/video.interface";

const VideoSchema = new Schema<Video>(
  {
    name: { type: String, required: true },
    description: String,
    url: String,
    duration: String,
    foro: { type: Schema.Types.ObjectId, ref: "Forum" },
    image: String,
    review: Number,
  },
  { versionKey: false }
);

VideoSchema.plugin(MongooseDelete, { overrideMethods: "all" });
const VideoModel = model<Video>("Video", VideoSchema);

export { VideoModel };
