import { defineConfig } from 'vite'
import vitApp from '@vitjs/vit'
import react from '@vitejs/plugin-react'
import path from 'path'
import routes from './src/config/routes'

export default defineConfig({
  plugins: [
    react(),
    vitApp({
      routes,
      dynamicImport: {
        loading: './components/PageLoading'
      },
      exportStatic: {}
    })
  ],
  server: {
    host: true,
    port: 8080,
    open: false,
    cors: {
      origin: '*'
    }
  },
  fs: {
    strict: false
  },
  define: {
    'process.env': process.env
  },
  build: {
    chunkSizeWarningLimit: 15000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;'
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: 'node_modules/$1'
      },
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@@',
        replacement: path.resolve(__dirname, 'src/.vit')
      }
    ]
  }
})
