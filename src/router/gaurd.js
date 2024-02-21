import { useUserStore } from '@/stores/user';

export function useRouterGarud(router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (to.meta.auth && !userStore.isAuthenticated) {
      next('/login');
    } else {
      next(); // Proceed with navigation
    }
  });
  router.afterEach((to, from) => {
    const userStore = useUserStore();
    if (to.name == 'login' && userStore.isAuthenticated) {
      router.push(from);
    }
  });
}
