import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: '',
    id: '',
    token: '',
  });

  const isAuthenticated = computed(() => {
    return user.value.token !== '';
  });
  return { user, isAuthenticated };
});
