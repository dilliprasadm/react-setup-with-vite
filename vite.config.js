import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite → dev server + bundler
// @vitejs/plugin-react → JSX + Fast Refresh
// "type": "module" is important because Vite uses ES modules.

// During development:
// Vite does NOT bundle everything
// It serves native ES modules
// Uses esbuild for super fast transpiling
// Only bundles during npm run build

// 🔥 Vite vs Webpack
// Webpack	            Vite
// Bundles during dev	  No bundling in dev
// Needs heavy config	  Minimal config
// Babel for JSX	      esbuild + plugin
// Slower startup	      Instant startup

// You can also run directly: npx vite

// "type": "module",
// "scripts": {
//   "dev": "vite",
//   "build": "vite build",
//   "preview": "vite preview"
// }

// Without it, Vite runs with default settings.
// With it, you can:
// Add plugins
// Configure aliases
// Change port
// Customize build
// Optimize performance


// Technically, you could write:
// export default {
//   plugins: [react()]
// }

// But defineConfig() gives:
// Better TypeScript support
// Better IntelliSense
// Validation hints


// @vitejs/plugin-react
// By default, Vite:
// Understands plain JS
// Understands ES modules
// But it does NOT understand:
// JSX
// React Fast Refresh
// React-specific optimizations

// plugins: [react()]
// You are telling Vite:
// “Hey, when you see JSX, transform it properly and enable React development features.”
// Internally, this plugin:
// Uses esbuild to transform JSX
// Enables Fast Refresh (instant updates without losing state)
// Handles React automatic runtime
// Optimizes development experience

export default defineConfig({
  plugins: [react()],
});
