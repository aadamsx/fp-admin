Meteor.methods({
  addUser(firstName, lastName) {
    debugger;
    Users.insert({
      firstName,
      lastName,
      dateOfBirth,
      date: new Date(),
    });
  },
  removeUser(_id) {
    Users.remove(_id);
  },
  addPerson(person) {
    debugger;
    People.insert({
      person,
      date: new Date(),
    });
  },
  removePerson(_id) {
    People.remove(_id);
  },
});
