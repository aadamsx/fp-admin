<template>
  <form>
    <text-input
      v-bind:label="firstNameLabel"
      v-bind:value="firstName"
      v-on:onInputChange="updateInput($event)">
    </text-input>

    <text-input v-bind:label="LastNameLabel" v-model="lastName"></text-input>
    <dateControl v-bind:label="dobDateLabel" v-model="dob"></dateControl>

    <checkbox-input-single
      v-bind:label="firstNameCheckboxLabel"
      v-bind:ckbs="firstNameCheckbox"
      v-on:onCheckboxInputChanged="updateCheckbox($event)">
    </checkbox-input-single>

    <!-- <vue-html5-editor :height="500"></vue-html5-editor> -->

    <h1>{{ firstNameCheckbox }}</h1>

    <submit-button v-bind:label="submitLabel" v-on:click="addUser"></submit-button>

    <div v-for="usr in users">
      <span>{{ usr.firstName }}, {{ usr.lastName }} : {{ usr.dobDate }}</span>
      <button v-on:click="removePerson(usr._id)">x</button>
    </div>

  </form>
</template>

<script>
  // import Event from './EventDispatcher.js';
  // functions: filters
  import {reverse, filterBy, findBy} from './filters.js'

  // components
  import dateControl from './inputDate.vue';
  import textInput from './TextInput.vue';
  import submitButton from './SubmitButton.vue';
  import checkboxInputSingle from './CheckboxInputSingle.vue';

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
      firstNameCheckbox: '',
      firstNameCheckboxLabel: 'Checkbox for First Name',
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
        return users;
      },
    },

    methods: {
      updateCheckbox(event) {
        console.log('test', event);
        this.firstNameCheckbox = event;
      },
      updateInput(event) {
        console.log('test', event);
        this.firstName = event;
      },
      addUser() {
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
      submitButton,
      'checkbox-input-single': checkboxInputSingle
    },
  };
</script>
