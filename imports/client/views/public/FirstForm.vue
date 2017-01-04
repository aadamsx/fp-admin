<template>
  <form>
    <text-input :label="firstNameLabel" v-model="firstName"></text-input>
    <text-input :label="LastNameLabel" v-model="lastName"></text-input>
    <dateControl :label="dobDateLabel" v-model="dob"></dateControl>

    <submit-button :label="submitLabel" @click="addUser"></submit-button>

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
  import dateControl from './inputDate.vue';
  import textInput from './TextInput.vue';
  import submitButton from './SubmitButton.vue';

  export default {
    // name: 'FirstForm',

    data: () => ({
      firstNameLabel: 'First Name:',
      LastNameLabel: 'Last Name:',
      dobDateLabel: 'Date of Birth:',
      submitLabel: 'Add New Person',
      dob: '',
      newUser: '',
      firstName: '',
      lastName: '',
      // users: [{firstName: 'test', lastName: 'test', dobDate: 'test'}]
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
        this.dob = '';
      },
      removeUser(_id) {
        Meteor.call('addUser', _id);
      },
    },

    components: {
      dateControl,
      textInput,
      submitButton
    },
  };
</script>
