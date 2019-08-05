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
      phoneNumber: String,
      email: String,
      city: String,
      category: String,
      description: String,
      title: String,
      image: String,
    });

    try {
      const post = Posts.insert({ ...post })
      if (!!Meteor.user()) {
        Meteor.user().ownPosts = Meteor.user().ownPosts.concat(post._id);
      }
      return post;
    } catch (exception) {
      console.log(exception);
      handleMethodException(exception);
    }
  },
  'posts.update': function postsUpdate(post) {
    check(post, {
      _id: String,
      ownerName: String,
      phoneNumber: String,
      email: String,
      city: String,
      category: String,
      description: String,
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
          Meteor.user().ownPosts = Meteor.user().ownPosts.filter(id => id !== postId);
          return Posts.remove(postId);
        }
      }

      throw new Meteor.Error('403', "Sorry. You're not allowed to delete this post.");
    } catch (exception) {
      handleMethodException(exception);
    }
  },
});
