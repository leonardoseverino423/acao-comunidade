import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [createHtmlPlugin({ minify: true })],
  build: {
    outDir: "dist",
    cssMinify: true,
    rollupOptions: {
      input: fileURLToPath(new URL("./index2.html", import.meta.url)),
    },
  },
});
