import mongoose from 'mongoose';
import validator from 'validator';
const Schema = mongoose.Schema;

const Posts = new Mongo.Collection('Posts');

Posts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Posts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const PostsSchema = new Schema(
  {
    owner: Number,
    ownerName: String,
    category: {
      type: String,
      enum: ['Service', 'Sale', 'Housing'],
    },
    title: {
      type: String,
      required: [true, 'You need a title for your post'],
    },
    email:{
      type:String,
      validate:{
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email',
        isAsync: false
      }
    },
    phoneNumber: Number,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Posts", PostsSchema)
