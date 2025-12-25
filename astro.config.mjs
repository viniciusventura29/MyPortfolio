import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site:"https://me.ventura.dev.br",
  integrations: [tailwind(), mdx(), react()]
});