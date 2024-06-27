import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Model from '../views/_model.vue';
import Car from '../views/car/index.vue';
import All from '../views/all.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/all',
    name: 'All',
    component: All,
  },
  {
    path: '/:model',
    name: 'Model',
    component: Model,
  },
  {
    path: '/:model/:id',
    name: 'Car',
    component: Car,
  },
  { path: '/404', component: NotFound },
  { path: '/:catchAll(.*)', redirect: '404' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
