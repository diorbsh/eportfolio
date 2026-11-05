import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
    global: 'globalThis'
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'PortfolioTimeline',
      fileName: 'timeline',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-dom/client': 'ReactDOM'
        }
      }
    }
  }
})