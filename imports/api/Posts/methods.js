/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import handleMethodException from '../../../modules/handleMethodException';
import Posts from './Posts';

Meteor.methods({
  'posts.findOne': function postsFindOne(postId) {
    check(postId, Match.OneOf(String, undefined));

    try {
      return Posts.findOne(postId);
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'posts.insert': function postsInsert(post) {
    check(post, {
      ownerName: String,
      phoneNumber: Number,
      email: String,
      city: String,
      category: String,
      description: String,
      title: String,
      images: [String],
      price: Number,
    });

    try {
      const newPostId = Posts.insert({ ...post });

      if (!!Meteor.user()) {
        const userId = Meteor.user()._id;
        const ownPosts = Meteor.user().ownPosts.concat(newPostId);
        Meteor.users.update(userId, {
          $set: {
            ownPosts,
          },
        });
      }

      return newPostId;
    } catch (exception) {
      console.log(exception);
      handleMethodException(exception);
    }
  },
  'posts.update': function postsUpdate(post) {
    check(post, {
      _id: String,
      ownerName: String,
      phoneNumber: Number,
      email: String,
      city: String,
      category: String,
      description: String,
      images: [String],
      price: Number,
    });

    try {
      const postId = post._id;

      if (!!Meteor.user()) {
        if (Meteor.user().ownPosts.includes(postId)) {
          Posts.update(postId, { $set: post });
          return postId; // Return _id so we can redirect to post after update.
        }
      }

      throw new Meteor.Error('403', "Sorry. You're not allowed to edit this post.");
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'posts.remove': function postsRemove(postId) {
    check(postId, String);

    try {
      if (!!Meteor.user()) {
        if (Meteor.user().ownPosts.includes(postId)) {
          const userId = Meteor.user()._id;
          const ownPosts = Meteor.user().ownPosts.filter(id => id !== postId);
          Meteor.users.update(userId, {
            $set: {
              ownPosts,
            },
          });
          return Posts.remove(postId);

        }
      }

      throw new Meteor.Error('403', "Sorry. You're not allowed to delete this post.");
    } catch (exception) {
      handleMethodException(exception);
    }
  },
});
