import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import editProfile from './editProfile';
import deleteAccount from './deleteAccount';
import handleMethodException from '../../../../modules/handleMethodException';

Meteor.methods({
  'users.editProfile': function usersEditProfile(profile) {
    check(profile, {
      emailAddress: String,
      profile: {
        name: {
          first: String,
          last: String,
        },
        phoneNumber: String,
      },
    });

    return editProfile({ userId: this.userId, profile })
      .then((response) => response)
      .catch((exception) => {
        handleMethodException(exception);
      });
  },
  'users.deleteAccount': function usersDeleteAccount(userId) {
    check(userId, Match.Maybe(String));
    if (userId && !Roles.userIsInRole(this.userId, 'admin'))
      throw new Meteor.Error('403', 'Sorry, you need to be an administrator to do this.');
    return deleteAccount({ userId: userId || this.userId })
      .then((response) => response)
      .catch((exception) => {
        handleMethodException(exception);
      });
  },
  'users.like': function like(postId) {
    check(postId, String);

    try {
      if (!!Meteor.user()) {
        const userId = Meteor.user()._id;
        const likePosts = Meteor.user().likePosts.concat(postId);
        Meteor.users.update(userId, {
          $set: {
            likePosts,
          },
        });

        return postId; // Return _id so we can redirect to post after update.
      }

      throw new Meteor.Error('403', "Sorry. You're not allowed to like this post.");
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'users.dislike': function like(postId) {
    check(postId, String);

    try {
      if (!!Meteor.user()) {
        if (Meteor.user().likePosts.includes(postId)) {
          const userId = Meteor.user()._id;
          const likePosts = Meteor.user().likePosts.filter(id => id !== postId);
          Meteor.users.update(userId, {
            $set: {
              likePosts,
            },
          });

          return postId; // Return _id so we can redirect to post after update.
        }

      }

      throw new Meteor.Error('403', "Sorry. You're not allowed to dislike this post.");
    } catch (exception) {
      handleMethodException(exception);
    }
  },
});
