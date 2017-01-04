import Page from '/imports/client/views/public/Page.vue';
import FirstForm from '/imports/client/views/public/FirstForm.vue';

// 1. Define route components.
// These can be imported from other files
const NotFound = { template: '<div><h1>Not Found</h1></div>' }
const Index = { template: '<div>Home</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
export const routes = [
  { path: '/', component: Index },
  { path: '/page', component: Page },
  { path: '/first-form', component: FirstForm  },
  { path: '*', component: NotFound } // Not Found handler
];
