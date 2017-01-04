import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker'
import VueRouter from 'vue-router'
import AppLayout from '/imports/client/views/AppLayout.vue';
import {Routes} from '/imports/client/router.js';

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

Meteor.startup(() => {
  Vue.use(VueMeteorTracker);
  Vue.use(VueRouter);

  const app = new Vue({
      router: router,
      render: h => h(AppLayout),
  }).$mount('app');
});
