import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import {join, resolve} from 'path'
import localConfig from './localConfig.js'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: localConfig.port,
        https: {
            cert: fs.readFileSync(join(localConfig.projectPath, 'keys/cert.crt')),
            key: fs.readFileSync(join(localConfig.projectPath, 'keys/cert.key'))
        }
    },
})
