import { Accounts } from 'meteor/accounts-base';

Accounts.config({
  forbidClientAccountCreation: false,
  sendVerificationEmail: true
});