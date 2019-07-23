/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import Posts from '../../Posts/Posts';

let action;

const deleteUser = (userId) => {
  try {
    return Meteor.users.remove(userId);
  } catch (exception) {
    throw new Error(`[deleteAccount.deleteUser] ${exception.message}`);
  }
};

const deletePosts = (userId) => {
  try {
    return Posts.remove({ owner: userId });
  } catch (exception) {
    throw new Error(`[deleteAccount.deletePosts] ${exception.message}`);
  }
};

const deleteAccount = ({ userId }, promise) => {
  try {
    action = promise;
    deletePosts(userId);
    deleteUser(userId);
    action.resolve();
  } catch (exception) {
    action.reject(exception.message);
  }
};

export default (options) =>
  new Promise((resolve, reject) => deleteAccount(options, { resolve, reject }));
