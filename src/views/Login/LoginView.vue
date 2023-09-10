<template>
  <div class="container">
    <div id="login">
      <p class="title">Login</p>
      <div class="username">
        <input type="text" autocomplete="email" v-model="username" />
      </div>
      <div class="password">
        <input type="password" autocomplete="password" v-model="password" />
      </div>
      <div class="submit">
        <button @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const username = ref('admin');
const password = ref('123456');

const submit = () => {
  console.log('username: ' + username.value);
  console.log('password: ' + password.value);

  proxy.axios({
    method: 'post',
    url: '/login',
    data: {
      username: username.value,
      password: password.value,
    },
  }).then((res)=> {
    console.log(res.data);
    proxy.messageBox({
      message: 'login message',
      title: 'login',
      ok: 'confirm',
    }).then(() => {
      console.log('confirm');
    });
  });
};
</script>

<style lang="less">
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .username,
  .password {
    margin: 10px 0;
    input {
      width: 200px;
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0 10px;
      outline: none;
    }
  }
  .submit {
    margin-top: 20px;
    button {
      width: 100px;
      height: 30px;
      border: none;
      border-radius: 5px;
      background-color: #ccc;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
