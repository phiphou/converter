import {defineConfig} from "vite"
// import {analyzer} from "vite-bundle-analyzer"
import tailwindcss from "@tailwindcss/vite"
export default defineConfig({
  define: {
    "process.env": {},
  },
  optimizeDeps: {
    include: ["buffer"],
  },
  resolve: {
    alias: {
      buffer: "buffer",
    },
  },
  plugins: [tailwindcss()],
  build: {
    minify: "esbuild",
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          "chart.js": ["react-chartjs-2", "chart.js"],
          hash_wasm: ["hash-wasm"],
        },
      },
    },
  },
})
