import {defineConfig} from "vite"
// import {analyzer} from "vite-bundle-analyzer"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
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
      "@krypto": path.resolve(__dirname, "node_modules/@ck0nrad/krypto"),
    },
  },
  plugins: [tailwindcss()],
  build: {
    minify: "esbuild",
    rollupOptions: {
      treeshake: true,
      external: [
        "@ck0nrad/krypto", // ← Ignore le module natif dans le bundle
      ],
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
