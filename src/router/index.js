import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoL from '../views/LoL.vue';
import Login from '../views/Auth/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/LoL',
    name: 'League of legends',
    component: LoL,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

/*
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( webpackChunkName: "about"  '../views/AboutView.vue')
  }
*/
