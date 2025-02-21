import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from "node:path";
import { ViteMinifyPlugin } from 'vite-plugin-minify'

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
  ],
  clearScreen: false,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    sourcemap: true,
  },
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['vue', 'vue-router', 'vue-i18n'],
      },
    },
  },
  base: '/',
})
