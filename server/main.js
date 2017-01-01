import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.publish('people', function() {
  return People.find({});
});
Meteor.publish('users', function() {
  return Users.find({});
});
