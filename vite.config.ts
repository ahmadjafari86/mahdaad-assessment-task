import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  base: "/dist/",
  build: {
    outDir: "../webrtc-server/wwwroot/dist",
    emptyOutDir: true,
    manifest: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
