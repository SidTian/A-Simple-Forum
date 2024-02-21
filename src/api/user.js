// user request list
import { http } from '@/axios/index';
export function userLogin(data) {
  return http({
    url: '/login',
    method: 'post',
    data: data,
  });
}

export function getUserInfo(data) {
  return http({
    url: '/getUserInfo',
    method: 'post',
    data: data,
  });
}
