<template>
  <div class="box">
    <div class="main">
      <div class="text">
        <p>{{ title }}</p>
        <p>{{ message }}</p>
      </div>
      <div class="btn">
        <button @click="onConfirm">ok</button>
        <button @click="onCancel">cancel</button>
      </div>
    </div>
  </div>
</template>
<script setup>
// define props and function
defineProps({
  title: {
    type: String,
    default: 'title',
  },
  message: {
    type: String,
    default: 'message',
  },
  onConfirm: Function,
  onCancel: Function,
});
</script>
<style lang="less">
.box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999;

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    max-width: 200px;
  }
}
</style>
