import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content: string, filename: string) => {
          if (filename.endsWith(".module.scss")) {
            return `@use "@/styles/abstracts/variables" as *;\n@use "@/styles/abstracts/mixins" as *;\n${content}`;
          }

          return content;
        },
      },
    },
  },
});
