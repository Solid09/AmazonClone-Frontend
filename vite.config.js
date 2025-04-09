import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://amazonclone-backend-1b2978a6efa7.herokuapp.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
