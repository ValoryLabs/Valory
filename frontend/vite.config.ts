import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    ViteMinifyPlugin({}),
    vue(),
    vueJsx(),
    VueI18nPlugin({
      module: 'petite-vue-i18n',
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Russo+One&display=swap',
    ]),
  ],
  clearScreen: false,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          'vue-router': ['vue-router'],
          'vue-i18n': ['vue-i18n'],
          pinia: ['pinia'],
        },
      },
    },
  },
  base: '/',
})
