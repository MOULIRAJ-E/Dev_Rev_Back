 

import mongoose from "mongoose";
const { Schema } = mongoose;
const BookSchema = new Schema(
  {
    title:{
        type: String,
    },
    author:{
        type: String,
    },
    subject:{
        type: String,
    },
    publishDate:{
        type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Books", BookSchema);