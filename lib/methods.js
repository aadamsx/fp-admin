Meteor.methods({
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
