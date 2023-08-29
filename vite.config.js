import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()], // vite项目识别解析.vue后缀单文件组件
    server: {
      open: true, // vite项目启动时自动打开浏览器
      port: 8080, // vite项目启动时自定义端口
      // hmr: true, //开启热更新
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '/images': 'src/assets/images/',
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    define: {
      __VUE_PROD_DEVTOOLS__: true,
    },
  };
});
