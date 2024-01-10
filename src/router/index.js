import { createRouter, createWebHistory } from 'vue-router';
import { useRouterGarud } from './gaurd';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/LoginView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/HomePage.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/AboutPage.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

useRouterGarud(router);

export default router;
