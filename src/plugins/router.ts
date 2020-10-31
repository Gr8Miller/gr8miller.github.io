import Vue from 'vue';
import VueRouter, { RouteConfig, RouterOptions } from 'vue-router';
import Features from '@/views/Features.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
  {
    path: '/features',
    name: 'features',
    component: Features
  },
];

let options: RouterOptions = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
};
const router = new VueRouter(options);

export default router;
