import { createRouter, createWebHistory } from 'vue-router';
import { useRouterGarud } from './gaurd';
import Layout from '@/layout/indexPage.vue';

const routes = [
  { path: '/', redirect: '/dashboard/index' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/LoginView.vue'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Dashboard/DashBoard.vue'),
        name: 'dashboard',
        meta: {
          auth: true,
          permissions: ['superadmin', 'admin', 'user'],
        },
      },
    ],
  },
  {
    path: '/PostPage',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Post/PostPage'),
        name: 'PostPage',
        meta: {
          auth: true,
          permissions: ['superadmin', 'admin', 'user'],
        },
      },
    ],
  },
  {
    path: '/MainPage',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Main/MainPage'),
        name: 'MainPage',
        meta: {
          auth: true,
          permissions: ['superadmin', 'admin', 'user'],
        },
      },
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: Layout,
    component: () => import('@/views/404/404Page'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'NotFound' },
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

useRouterGarud(router);

export default router;
