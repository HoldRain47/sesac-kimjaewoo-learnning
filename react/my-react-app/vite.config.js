import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//tailwindcss 플러그인 불러오기
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
