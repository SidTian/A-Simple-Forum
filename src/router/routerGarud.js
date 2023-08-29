import router from '@/router/index.js';
import { useUserStore } from '@/stores/user';

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next('/login');
  } else {
    next(); // Proceed with navigation
  }
});
