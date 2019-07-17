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
  'posts.insert': function postsInsert(doc) {
    check(doc, {
      title: String,
      body: String,
    });

    try {
      return Posts.insert({ owner: this.userId, ...doc });
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'posts.update': function postsUpdate(doc) {
    check(doc, {
      _id: String,
      title: String,
      body: String,
    });

    try {
      const postId = doc._id;
      const postToUpdate = Posts.findOne(postId, { fields: { owner: 1 } });

      if (postToUpdate.owner === this.userId) {
        Posts.update(postId, { $set: doc });
        return postId; // Return _id so we can redirect to post after update.
      }

      throw new Meteor.Error('403', "Sorry, pup. You're not allowed to edit this post.");
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'posts.remove': function postsRemove(postId) {
    check(postId, String);

    try {
      const postToRemove = Posts.findOne(postId, { fields: { owner: 1 } });

      if (postToRemove.owner === this.userId) {
        return Posts.remove(postId);
      }

      throw new Meteor.Error('403', "Sorry, pup. You're not allowed to delete this post.");
    } catch (exception) {
      handleMethodException(exception);
    }
  },
});
