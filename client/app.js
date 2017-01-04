import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import VueMeteorTracker from 'vue-meteor-tracker';

// import VuexStore from '/imports/vuex/store'
// import { sync } from 'vuex-router-sync'

import AppLayout from '/imports/client/views/AppLayout.vue';
import { routes } from '/imports/client/router.js';

Vue.use(VueMeteorTracker);
Vue.use(VueRouter);

// const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

// sync(store, router);

Meteor.startup(() => {
  const app = new Vue({
    router: router,
    render: h => h(AppLayout),
  }).$mount('app');
});
