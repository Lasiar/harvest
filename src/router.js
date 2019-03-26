import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Table.vue";
import ChartCity from "./views/ChartCity";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chart-city",
      name: "chart-city",
      component: ChartCity
    }
  ]
});
