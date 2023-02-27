import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path-browserify'
import UnoCSS from 'unocss/vite'
import { unocssConfig } from '../unocss.config'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../', './src'),
      'vue': 'vue/dist/vue.esm-browser.js',
      'path': 'path-browserify'
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core'
      ],
      eslintrc: {
        enabled: false,
        globalsPropValue: true,
        filepath: './eslintrc-auto-imports.json'
      },
      dts: './src/types/auto-imports.d.ts'
    }),
    UnoCSS(unocssConfig)
  ]
})
