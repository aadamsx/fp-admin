import '/imports/client/router.js';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker'
// import { Router, nativeScrollBehavior } from 'meteor/akryum:vue-router2';
import Router from 'vue-router'
import AppLayout from '/imports/client/views/AppLayout.vue';

const router = new Router({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
});

Meteor.startup(() => {
  Vue.use(VueMeteorTracker);
  Vue.use(Router);

  new Vue({
      router: router.start(),
      render: h => h(AppLayout),
  }).$mount('app');
});
