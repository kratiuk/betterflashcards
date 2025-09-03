import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: './',
  build: {
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      input: "index.html",
    },
    sourcemap: mode !== "production",
  },
}));


