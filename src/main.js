import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
// import messageAlert to globalProperties
import messageAlert from '@/components/messageAlert/messageAlert.js';

const app = createApp(App);

// add messageAlert to globalProperties
app.config.globalProperties.messageAlert = messageAlert;
app.use(createPinia());
app.use(router);

app.mount('#app');

export default app;
