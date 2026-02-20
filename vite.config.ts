import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // make sure this is installed in devDependencies

// https://vitejs.dev/config/
export default defineConfig({
  base: "/social-minds0/", // matches your GitHub repo name for Netlify
  plugins: [react()],
  // Optional: configure build output for Netlify
  build: {
    outDir: "dist", // Netlify deploys from this folder
    emptyOutDir: true, // clean folder before each build
  },
  // Optional: dev server config for local development
  server: {
    port: 5173, // default Vite port
    open: true, // automatically opens browser on dev start
  },
});
