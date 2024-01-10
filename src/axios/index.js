import axios from 'axios';
import { useInterceptor } from './intercepter';

export const http = axios.create({
  timeout: 1000 * 4,
});

useInterceptor(http);
