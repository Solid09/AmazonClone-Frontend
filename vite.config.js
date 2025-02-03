import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, './localhost.pem')),
    },
  },
});
