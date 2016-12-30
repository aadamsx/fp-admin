<template>
  <div>
    <input v-model="newPerson" @keyup.enter="addPerson" placeholder="Enter new Person Name" />

    <div v-if="!$subReady.people">
      Loading...
    </div>

    <div class="people" v-for="ppl in peoples">
      <span class="content">{{ ppl.person }}</span>
      <button @click="removePerson(ppl._id)">x</button>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'page',
    data: () => ({
      newPerson: '',
      peoples: []
    }),
    meteor: {
      subscribe: {
        'people': [],
      },
      peoples() {
        let ppl = People.find({}, {
          sort: { date: -1 },
        });
        debugger;
        return ppl;
      },
    },
    methods: {
      addPerson() {
        debugger;
        Meteor.call('addPerson', this.newPerson);
        this.newPerson = '';
      },
      removePerson(_id) {
        Meteor.call('removePerson', _id);
      },
    },
  };
</script>
