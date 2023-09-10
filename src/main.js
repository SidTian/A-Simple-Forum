import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
// import mock
import '@/mock/mock.js';

// import axios
import axios from 'axios';
// import messageBox to globalProperties
import messageBox from '@/components/MessageBox/MessageBox.js';

const app = createApp(App);

// add messageBox to globalProperties
app.config.globalProperties.messageBox = messageBox;
app.config.globalProperties.axios = axios;

app.use(createPinia());
app.use(router);

app.mount('#app');

export default app;
