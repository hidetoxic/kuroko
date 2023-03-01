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
  build: {
    assetsDir: './assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
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
