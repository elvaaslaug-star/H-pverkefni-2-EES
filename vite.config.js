import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        umsagnir: resolve(import.meta.dirname, "/src/sidur/umsagnir.html"),
        nyUmsogn: resolve(import.meta.dirname, "/src/sidur/ny-umsogn.html"),
      },
    },
  },
});
