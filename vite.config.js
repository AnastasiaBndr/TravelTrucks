import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

export default defineConfig({
  plugins: [
    react(),
    createSvgSpritePlugin({
      exportType: "react",
      include: "**/icons/*.svg",
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    hmr: true,
  },
  base: '/',
});
