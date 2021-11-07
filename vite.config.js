import { resolve } from 'path'
import { defineConfig } from 'vite'

module.exports = defineConfig({
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        content: resolve(__dirname, 'src/chrome/content.js'),
      },
      output: {
        entryFileNames: 'static/js/[name].js',
      },
    },
  },
})
