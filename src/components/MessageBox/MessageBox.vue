<template>
  <transition name="messagebox-fade" @after-leave="onDestroy">
    <div @click="setVisiable(false)" v-show="visiable" class="box">
      <div @click.stop class="main">
        <div>
          <p class="">{{ title }}</p>
          <p class="">{{ message }}</p>
        </div>

        <div class="btn">
          <button @click="okBtnClicked">
            {{ ok }}
          </button>
          <button @click="cancelBtnClicked" v-if="cancel">
            {{ cancel }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { onOK, onCancel, message } = defineProps({
  title: {
    type: String,
    default: '提示',
  },
  message: {
    type: String,
    default: '',
  },
  ok: {
    type: String,
    default: 'OK',
  },
  cancel: {
    type: String,
    default: '',
  },
  onDestroy: Function,
  onOK: Function,
  onCancel: Function,
});

const promptContent = ref('');

const visiable = ref(false);
const setVisiable = (vis) => {
  visiable.value = vis;
};

const okBtnClicked = () => {
  setVisiable(false);
  onOK(promptContent.value);
};

const cancelBtnClicked = () => {
  setVisiable(false);
  onCancel();
};

onMounted(() => {
  setVisiable(true);
});
</script>

<style scoped>
.messagebox-fade-enter-from,
.messagebox-fade-leave-to {
  opacity: 0;
}

.messagebox-fade-enter-active,
.messagebox-fade-leave-active {
  transition: opacity 0.5s;
}

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
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    max-width: 200px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    .btn {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>
