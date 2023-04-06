import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path-browserify'
import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { unocssConfig } from '../unocss.config'

const proxyTarget = 'http://localhost:8050'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../', './src'),
      'vue': 'vue/dist/vue.esm-browser.js',
      'path': 'path-browserify'
    }
  },
  server: {
    host: '0.0.0.0',
    open: true,
    port: 8090,
    proxy: {
      '/api': {
        target: proxyTarget,
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
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
