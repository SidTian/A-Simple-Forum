import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
export const useUserStore = defineStore('user', () => {
  const router = useRouter();

  const user = ref({
    name: '',
    id: '',
    token: '',
  });
  const getToken = () => user.value.token;
  const isAuthenticated = computed(() => {
    return user.value.token !== '';
  });

  const login = (data)=> {
    user.value.token = data.token;
    router.push('home');
  };

  const getUserInfo = ()=> {
    // 发起请求 使用token
    // 设置id和name
  };
  return { user, getToken, isAuthenticated, login, getUserInfo };
});
