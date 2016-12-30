import { Router } from 'meteor/akryum:vue-router2';
import Index from '/imports/client/views/public/Index.vue';
import Page from '/imports/client/views/public/Page.vue';

// Not found
import NotFound from '/imports/client/views/public/NotFound.vue';

Router.configure(router => {
  router.addRoutes([{
    path: "/",
    name: "Index",
    components: {
        default: Index,
    }
  }, {
    path: "/page",
    name: "Page",
    components: {
        default: Page,
    }
  }, {
    path: "/not-found",
    name: "NotFound",
    components: {
        default: NotFound,
    }
  },]);
});
