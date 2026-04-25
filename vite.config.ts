import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages用のベースパス設定
  // リポジトリ名が RaimuNote.github.io なので、末尾にスラッシュを入れて指定します
  base: "/RaimuNote.github.io/",

  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      // shadcn/uiなどが使用する "@" パスの解決設定
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));