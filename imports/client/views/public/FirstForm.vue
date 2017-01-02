<template>
  <form>
    <label for="first-name">First Name:</label></label><input v-model="firstName" name="first-name" placeholder="User First Name" />
    <label for="last-name">Last Name:</label><input v-model="lastName" name="last-name" placeholder="User Last Name" />
    <DateComponent></DateComponent>
    <!-- <label for="date-of-birth">DOB:</label><input v-model="dateOfBirth" name="date-of-birth" placeholder="User Last Name" /> -->


    <button name="submit-button" v-on:click="addUser">Add New Person</button>

    <div v-for="usr in users">
      <span>{{ usr.firstName }}, {{ usr.lastName }} {{ usr.dateOfBirth }}</span>
      <button @click="removePerson(usr._id)">x</button>
    </div>

  </form>
</template>


<script>
  import Chat from './DateComponent.vue';
  import {Session} from 'meteor/session';
  export default {
    name: 'page',
    data: () => ({
      newUser: '',
      firstName: '',
      lastName: '',
      users: []
    }),
    meteor: {
      subscribe: {
        'users': [],
      },
      users() {
        let users = Users.find({}, {
          sort: { date: -1 },
        });
        debugger;
        return users;
      },
    },
    methods: {
      addUser() {
        debugger;
        Meteor.call('addUser', this.firstName, this.lastName, this.dateOfBirth);
        this.firstName = '';
        this.lastName = '';
        this.dateOfBirth = '';
      },
      removeUser(_id) {
        Meteor.call('addUser', _id);
      },
    },
    components: {
      DateComponent,
    },
  };
</script>
