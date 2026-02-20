import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/social-minds0/", // your repo name or subpath for Netlify
  plugins: [react()],
  server: {
    port: 5173, // default Vite dev server port
    open: true, // automatically opens browser on dev start
  },
  build: {
    outDir: "dist", // default build directory
  },
});
