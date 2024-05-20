import { createRouter, createWebHistory } from 'vue-router';
import Com from '../page/Com.vue';
import Uni from '../page/Uni.vue';
import Pe from '../page/Pe.vue';

const routes = [
  {
    path: '/',
    name: 'Com',
    component: Com
  },
  {
    path: '/uni',
    name: 'Uni',
    component: Uni
  },
  {
    path: '/pe',
    name: 'Pe',
    component: Pe
  },
  {
    path: '/com',
    name: 'Com2',
    component: Com
  }
];

const router = createRouter({
  history: createWebHistory('/'), routes
});

export default router;
