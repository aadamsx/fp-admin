// import { Router } from 'meteor/akryum:vue-router2';
import Router from 'vue-router'

import Index from '/imports/client/views/public/Index.vue';
import Page from '/imports/client/views/public/Page.vue';
import FirstForm from '/imports/client/views/public/FirstForm.vue';

// Not found
import NotFound from '/imports/client/views/public/NotFound.vue';

Router.map({
  // Not found handler
  '*': {
    component: {
        template:
        '<div>' +
        '<h1>Not Found</h1>' +
        '</div>'
    }
  },
  '/': {
    component: Index
  },
  '/page': {
    component: Page
  },
  '/first-form': {
    component: FirstForm
  },
  '/not-found': {
    component: NotFound
  }
});

// Router.configure(router => {
//   router.addRoutes([{
//     path: "/",
//     name: "Index",
//     components: {
//       default: Index,
//     }
//   }, {
//     path: "/page",
//     name: "Page",
//     components: {
//       default: Page,
//     }
//   }, {
//     path: "/first-form",
//     name: "FirstForm",
//     components: {
//       default: FirstForm,
//     }
//   }, {
//     path: "/not-found",
//     name: "NotFound",
//     components: {
//       default: NotFound,
//     }
//   },]);
// });
