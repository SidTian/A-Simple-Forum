import { useUserStore } from '@/stores/user';

export function useRouterGarud(router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.isAuthenticated) {
      next('/login');
    } else {
      next(); // Proceed with navigation
    }
  });
}
