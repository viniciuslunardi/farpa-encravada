import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serve em /farpa-encravada/ — quando houver domínio próprio, mudar base pra "/"
export default defineConfig({
  plugins: [react()],
  base: "/farpa-encravada/",
});
