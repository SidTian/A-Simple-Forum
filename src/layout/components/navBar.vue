<template>
  <section class="navbar">
    <div class="nav">
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link :to="{ name: route.name }">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="search">
        <input type="text" />
        <i class="icon iconfont icon-search"></i>
      </div>
      <div class="user">
        <p>{{ userStore.userState.userInfo.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const router = useRouter();
const routes = [];
for (
  let i = 0;
  i < router.options.routes.length;
  i++ // rout e has children
) {
  if (router.options.routes[i].children) {
    // route has auth
    if (router.options.routes[i].children[0].meta.auth) {
      // user has permission
      if (
        router.options.routes[i].children[0].meta.permissions.indexOf(
          // eslint-disable-next-line comma-dangle
          userStore.userState.userInfo.permission
        ) != -1
      ) {
        routes.push(router.options.routes[i].children[0]);
      }
    }
  }
}
</script>
<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  .nav {
    width: 40%;
    ul {
      list-style: none;
      border: none;
      height: 100%;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 56px;
      text-align: center;
      display: flex;
      li {
        line-height: 56px;
        flex: 1;
      }
      li:hover {
        background-color: #eee;
      }
      a {
        text-decoration: none;
        outline: none;
        color: #000;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

  .right {
    padding: 20px 0px;
    display: flex;
    width: 35%;
    justify-content: space-between;
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .user {
      display: flex;
    }
  }
}
</style>
