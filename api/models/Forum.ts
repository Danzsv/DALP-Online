import { Schema, model } from "mongoose";
import MongooseDelete = require("mongoose-delete");
import { Forum } from "../interfaces/forum.interface";

const ForumSchema = new Schema<Forum>({
  comment: String,
  content: String,
  answers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

ForumSchema.plugin(MongooseDelete, { overrideMethods: "all" });
const ForumModel = model<Forum>("Forum", ForumSchema);

module.exports = ForumModel;
