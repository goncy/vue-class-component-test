import Vue from "vue";
import Router from "vue-router";

import Computed from "./screens/Computed.js";
import GraphQL from "./screens/GraphQL.js";
import Transitions from "./screens/Transitions.js";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "computed",
      component: Computed,
    },
    {
      path: "/graphql",
      name: "graphql",
      component: GraphQL,
    },
    {
      path: "/transitions",
      name: "transitions",
      component: Transitions,
    },
  ],
});
