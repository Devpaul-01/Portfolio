import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//
// Tailwind runs as a Vite plugin (not only via the @tailwindcss/postcss
// entry in postcss.config.js) so it integrates with Vite's own module
// graph and asset pipeline. Without this, nested CSS @imports that pull in
// their own url() assets — like @fontsource's font-face files imported from
// src/index.css — go through a separate PostCSS pass that loses their
// original file's base directory, so Vite can't resolve those url()s back
// to real files and silently ships zero font files in the production
// build (fonts then fall back to system fonts for every visitor).
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
