import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "noix-model-vue",
      formats: ["es"],
    },
    minify: true,
    rollupOptions: {
      external: ["vue","@noix/model"],
    },
  },
});
