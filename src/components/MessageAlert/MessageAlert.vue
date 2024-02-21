<template>
  <transition ref="messageAlert" name="messageAlert" :appear="true" @after-leave="handleAfterLeave">
    <div class="message" v-show="visible">
      <slot class="msg-container">
        <p>{{ message }}</p>
      </slot>
    </div>
  </transition>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const { message, duration } = defineProps({
  message: {
    type: String,
    default: 'message',
  },
  duration: {
    type: Number,
    default: 3000,
  },
});
const visible = ref(true);
const messageAlert = ref();

// remove dom element after animation finished
const handleAfterLeave = () => {
  if (messageAlert.value && messageAlert.value.parentNode) {
    messageAlert.value.parentNode.removeChild(messageAlert.value);
  }
};
// set a timer, which makes dom isvisable
const setTimer = () => {
  setTimeout(() => {
    visible.value = false;
  }, duration.value - 500);
};

onMounted(() => {
  setTimer();
});
</script>
<style lang="less" scoped>
.message {
  height: 16px;
  position: fixed;
  min-width: 380px;
  // element-ui抄来的样式
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
  }

  &-warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
  }

  &-error {
    background-color: #fef0f0;
    border-color: #fde2e2;
  }
}

.msg-container {
  display: flex;
  align-items: center;
  .iconfont {
    margin-right: 5px;
  }
}

.messageAlert-enter-active {
  animation: anim 1s;
}

.messageAlert-leave-active {
  animation: anim 1s reverse;
}

@keyframes anim {
  0% {
    opacity: 0;
    transform: translate(-50%, -200%);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
</style>
