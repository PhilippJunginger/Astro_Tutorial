import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stunning-pastelito-c6eda8.netlify.app",
  integrations: [preact()]
});