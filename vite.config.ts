import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path';

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
      'pages': resolve('src/pages'),
      'utils': resolve('src/utils'),
      'services': resolve('src/services'),
      'stores': resolve('src/stores'),
      'components': resolve('src/components'),
      'layout': resolve('src/layout'),
      'hooks': resolve('src/hooks')
    },
  },
  plugins: [
    reactRefresh()
  ]
})
