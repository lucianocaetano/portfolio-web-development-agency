import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import playformCompress from "@playform/compress";

export default defineConfig({
  integrations: [react(), playformCompress()],

  vite: {
    plugins: [tailwindcss()],
  },
});