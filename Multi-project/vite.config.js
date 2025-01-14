import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
   // 设置scss的api类型为modern-compiler
   css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  plugins: [
    vue(),
    
   
   
  ],
  build: {
    // 设置打包文件夹的名称
    outDir: 'dist',
    rollupOptions: {
      output: {
        // 将所有 JavaScript 文件打包成一个
        manualChunks: () => 'everything',
        // 自定义输出文件名
        entryFileNames: 'assets/Multi.js',
        chunkFileNames: 'assets/Multi.js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/deliverysv.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    // 禁用压缩
    minify: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8888,
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://192.168.10.183:28366", // 另一个目标接口地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, "") // 重写请求路径
      }
    },
  }
})
