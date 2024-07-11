import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   // 配置sass-loader
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/components/Button.scss";` // 可以在这里全局导入SCSS文件
  //     }
  //   }
  // }
})
