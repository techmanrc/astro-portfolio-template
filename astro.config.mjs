// @ts-check
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ['link-variant', 'github', 'twitter', 'linkedin'],
      },
    }),
  ],
})
