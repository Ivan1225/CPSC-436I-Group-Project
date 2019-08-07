import { Mongo } from 'meteor/mongo';
import validator from 'validator';
import SimpleSchema from 'simpl-schema';

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

Posts.schema = new SimpleSchema({
  // owner: Number,
  ownerName: String,
  category: {
    type: String,
    allowedValues: ['service', 'sale', 'housing'],
  },
  title: {
    type: String,
    required: [true, 'You need a title for your post'],
  },
  email: String,
  city: {
    type: String,
    allowedValues: ['vancouver', 'surrey', 'burnaby', 'richmond', 'coquitlam', 'langley', 'delta', 'north_vancouver', 'maple_ridge', 'new_westminster', 'port_coquitlam', 'west_vancouver', 'port_moody', 'white_rock', 'pitt_meadows', 'tsawwassen']
  },
  phoneNumber: Number,
  price: Number,
  description: String,
  createdAt: {
    type: String,
    autoValue() {
      if (this.isInsert) return new Date().toISOString();
    },
  },
  updatedAt: {
    type: String,
    autoValue() {
      if (this.isInsert || this.isUpdate) return new Date().toISOString();
    },
  },
  images: [{
    type: String,
    label: "Image",
  }],
});

Posts.attachSchema(Posts.schema);
export default Posts;
