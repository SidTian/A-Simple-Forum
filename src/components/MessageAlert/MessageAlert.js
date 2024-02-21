import { createApp } from 'vue';

import MessageAlertCpn from './MessageAlert.vue';

export default function messageAlert(options) {
  const app = createApp(MessageAlertCpn, {
    ...options,
    // destroy all vue instance and remove all event listeners
    // but not remove the dom element
    onDestroy: () => {
      app.unmount();
    },
  });

  const frg = document.createDocumentFragment();
  app.mount(frg);
  document.body.appendChild(frg);
}
