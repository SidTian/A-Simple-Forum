import { createVNode, render } from 'vue';
import messageAlertComponent from './messageAlert.vue';

export default function messageAlert(options) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  // close alert
  function handleClose() {
    render(null, container);
    document.body.removeChild(container);
  }
  const { title, message, onConfirm, onCancel } = options;

  const vnode = createVNode(messageAlertComponent, {
    title,
    message,
    onConfirm: () => {
      onConfirm();
      handleClose();
    },
    onCancel: () => {
      onCancel();
      handleClose();
    },
  });
  render(vnode, container);
}
