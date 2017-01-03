Meteor.methods({
  addUser(firstName, lastName, dobDate) {
    debugger;
    Users.insert({
      firstName,
      lastName,
      dobDate,
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
