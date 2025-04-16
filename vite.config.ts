import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    minify: "esbuild",
    rollupOptions: {
      treeshake: true,
    },
  },
})
