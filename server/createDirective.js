import { Meteor } from 'meteor/meteor';
import { Slingshot } from 'meteor/edgee:slingshot';

Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  bucket: Meteor.settings["s3"]["bucket"],
  AWSAccessKeyId: Meteor.settings["s3"]["key"],
  AWSSecretAccessKey: Meteor.settings["s3"]["secret"],
  region: Meteor.settings["s3"]["region"],
  acl: "public-read",
  authorize: function () {
    return true;
  },
  maxSize:5 * 1024 * 1024 * 1024,
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  key: function (file) {
    //Store file into a directory by the user's username.
    return Date.now() + "_" + file.name;
  }
});