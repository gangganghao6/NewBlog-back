import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import fs from 'fs'
import { join } from 'path'
import localConfig from './localConfig'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 1024,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  server: {
    port: localConfig.port,
    https: {
      cert: fs.readFileSync(join(localConfig.projectPath, 'keys/cert.crt')),
      key: fs.readFileSync(join(localConfig.projectPath, 'keys/cert.key'))
    }
  },
  build: {
    sourcemap: true,
    target: ['es2015', 'chrome58', 'firefox58', 'safari11']
  }
})
