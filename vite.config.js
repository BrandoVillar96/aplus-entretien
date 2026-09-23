import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Multi-page app: the careers page is a fully separate HTML entry
      // (its own bundle, its own URL, /carrieres.html) rather than a route
      // handled by a client-side router — it needs no router dependency and
      // works unmodified on any static host, with no server rewrite rules.
      input: {
        main: `${root}index.html`,
        carrieres: `${root}carrieres.html`,
      },
    },
  },
})
