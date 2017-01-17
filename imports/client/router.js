import FirstForm from '/imports/client/views/public/FirstForm.vue';

const NotFound = { template: '<div><h1>Not Found</h1></div>', name: 'NotFound' }
const Index = { template: '<div>Home</div>', name: 'Index' }

export const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/first-form', name: 'FirstForm', component: FirstForm },
  { path: '*', name: 'NotFound', component: NotFound } // Not Found handler
];
