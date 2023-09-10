import { createApp } from 'vue';

import MessageBoxCpn from './MessageBox.vue';

export default function messageBox(options) {
  return new Promise((resolve, reject) => {
    const app = createApp(MessageBoxCpn, {
      ...options,
      onDestroy: () => {
        app.unmount();
      },
      onOK: (value) => {
        resolve(value);
      },
      onCancel: () => {
        reject(new Error());
      },
    });

    const frg = document.createDocumentFragment();

    app.mount(frg);

    document.body.appendChild(frg);
  });
}
