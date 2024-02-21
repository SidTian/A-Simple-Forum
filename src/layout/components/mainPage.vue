<template>
  <section id="main">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition name="fade">
          <KeepAlive>
            <Suspense>
              <!-- 主要内容 -->
              <component :is="Component" />

              <!-- 加载中状态 -->
              <template #fallback>
                <LoadingIcon />
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </section>
</template>
<script setup>
import LoadingIcon from '@/layout/components/LoadingIcon.vue';
</script>
<style scoped lang="less">
#main {
  flex: 1;
  text-align: center;
}

:deep(.fade-enter-active) {
  transition: opacity 0.5s ease;
}
:deep(.fade-enter-from) {
  opacity: 0;
}
</style>
