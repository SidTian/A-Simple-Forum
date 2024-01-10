import { useUserStore } from '@/stores/user';

export function useInterceptor(axios) {
  // 请求拦截器
  axios.interceptors.request.use(
    (config) => {
      // 设置请求的auth
      const userStore = useUserStore();
      if (userStore.getToken()) {
        config.headers['Authorization'] = `Bearer ${userStore.getToken()}`;
      }

      return config;
    },
    (error) => {
      // 处理请求错误
      return Promise.reject(error);
    },
  );

  // 响应拦截器
  axios.interceptors.response.use(
    (response) => {
      // 处理响应
      response.status = 400;
      if (response.status == 200) {
        return Promise.resolve(response.data);
      } else {
        console.log('error');
        return Promise.reject(new Error('NetWork Error'));
      }
    },
    (error) => {
      // 处理响应错误
      return Promise.reject(error);
    },
  );
}
