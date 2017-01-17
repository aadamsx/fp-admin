import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import VueMeteorTracker from 'vue-meteor-tracker';

// import VuexStore from '/imports/vuex/store'
// import { sync } from 'vuex-router-sync'

import AppLayout from '/imports/client/views/AppLayout.vue';
import { routes } from '/imports/client/router.js';

import VueMask from 'v-mask'
// import VueHtml5Editor from 'vue-html5-editor';


Vue.use(VueMeteorTracker);
Vue.use(VueRouter);
Vue.use(VueMask);
// Vue.use(VueHtml5Editor, {name: 'vue-html5-editor',
//   //keep only the modules you want and customize the order.
//   //can be used with hiddenModules together
//   visibleModules: [
//       "text",
//       "color",
//       "font",
//       "align",
//       "list",
//       "link",
//       "unlink",
//       "tabulation",
//       "image",
//       "hr",
//       "eraser",
//       "undo",
//       "full-screen",
//       "info",
//   ]}
// );

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
