// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Nixgle Community',

      social: [
        { icon: 'heart', label: 'Donate', href: 'https://buymeacoffee.com/' },
		{ icon: 'github', label: 'GitHub', href: 'https://github.com/your-username' }
      ],

      sidebar: [
        {
          label: 'Guides',
          items: ['guides/example'],
        },
        {
			label: 'WordPress',
			items: [
				{ label: 'Themes', collapsed: true, autogenerate: { directory: 'wordpress/themes' }},
				{ label: 'Plugins', collapsed: true, autogenerate: { directory: 'wordpress/plugins' } },
				{ label: 'Template Kits', collapsed: true, autogenerate: { directory: 'wordpress/template-kits' } },
			],
		}
      ],
    }),
  ],
});