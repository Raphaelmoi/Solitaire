import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Home from './pages/home.vue';

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/solitaire',
        name: 'Solitaire',
        component: () => import('./pages/solitaire.vue'),
      },
    ],
  });
