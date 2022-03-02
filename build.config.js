import Unocss from 'unocss/vite';
import { presetIcons, presetUno, presetAttributify } from 'unocss';

export default {
  vite: true,
  vitePlugins: [
    Unocss({
      presets: [
        presetUno(),
        presetIcons({}),
				presetAttributify()
      ],

			// shortcuts: {
			// 	'semi-typography-action-copy-icon': 'inline-flex'
			// },

			rules: [
				['semi-typography-action-copy-icon', { display: 'inline-flex' }]
			]
			
    }),
  ],
}