import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build',
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
  },
  esbuild: {
    loader: 'jsx',
    include: 'src/**/*.{js,jsx,ts,tsx}'
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})
