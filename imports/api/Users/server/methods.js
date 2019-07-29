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
});
