import { Schema, model, Types, connect } from "mongoose";
import MongooseDelete = require("mongoose-delete");

import { Category } from "../interfaces/category.interface";

const CategorySchema = new Schema<Category>({
  name: { type: String, required: true },
  description: String,
});

CategorySchema.plugin(MongooseDelete, { overrideMethods: "all" });
const CategoryModel = model<Category>("Category", CategorySchema);

module.exports = CategoryModel;
