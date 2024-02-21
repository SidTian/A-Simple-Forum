import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { userLogin, getUserInfo } from '@/api/user';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();

  const userState = ref({
    userInfo: {
      name: '',
      id: '',
      permission: '',
    },
    token: '',
  });

  const getToken = () => userState.value.token;

  const isAuthenticated = computed(() => {
    return userState.value.token !== '';
  });

  const login = (data) => {
    userLogin(data).then((res) => {
      userState.value.token = res.data.token;
      setUserInfo();
    }).catch((err) => {
      alert(err.message);
    });
  };

  const setUserInfo = async () => {
    // 发起请求 使用token
    // 设置id和name
    await getUserInfo({ token: userState.value.token }).then((res) => {
      userState.value.userInfo = res.data.userInfo;
    }).catch((err) => {
      alert(err.message);
    });

    router.push({ name: 'dashboard' });
  };
  return { userState, getToken, isAuthenticated, login, getUserInfo, setUserInfo };
});
