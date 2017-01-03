<template>
  <form>
    <label for="first-name">First Name:</label></label><input v-model="firstName" name="first-name" placeholder="User First Name" />
    <label for="last-name">Last Name:</label><input v-model="lastName" name="last-name" placeholder="User Last Name" />
    <date :label="dobDateLabel" v-model="dob"></date>
    <submitBtn :lable="submitLabel" @click="addUser"></submitBtn>

    <div v-for="usr in users">
      <span>{{ usr.firstName }}, {{ usr.lastName }} : {{ usr.dobDate }}</span>
      <button @click="removePerson(usr._id)">x</button>
    </div>

  </form>
</template>

<script>
  import {Session} from 'meteor/session';

  // functions: filters
  import {reverse, filterBy, findBy} from './filters.js'

  // components
  import date from './DateComp.vue';
  import submitBtn from './SubmitBtnComp.vue';

  export default {
    name: 'firstform',
    data: () => ({
      dobDateLabel: 'Date of Birth',
      submitLabel: 'Add New Person',
      dob: '',
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
        Meteor.call('addUser', this.firstName, this.lastName, this.dob);
        this.firstName = '';
        this.lastName = '';
        this.dateOfBirth = '';
      },
      removeUser(_id) {
        Meteor.call('addUser', _id);
      },
    },

    components: {
      date,
      submitBtn
    },
  };
</script>
