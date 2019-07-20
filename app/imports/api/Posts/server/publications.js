import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Posts from '../Posts';

Meteor.publish('posts', function posts() {
  return Posts.find();
});

// Note: Posts.view is also used when editing an existing document.
Meteor.publish('posts.view', (postId) => {
  check(postId, String);
  return Posts.find({ _id: postId });
});

Meteor.publish('Posts.edit', function PostsEdit(postId) {
  check(postId, String);
  return Posts.find({ _id: postId, owner: this.userId });
});
