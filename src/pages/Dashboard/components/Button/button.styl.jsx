
import * as variables from '../../../../theme/variables'
import * as style from '../../../../theme/base'
import * as darkTheme from '../../../../theme/dark'


const ButtonGroup = 'items-center justify-center'

const themelist = ['default', 'primary', 'warning', 'danger', 'success']

const lightTheme = themelist.reduce(
	(r,c) => ({
		...r,
		[c]: [style.Font.color[c], darkTheme.Font[c]]
	})
	,{}
)

export const ButtonProps = {
	base: [variables.AnimateDur, style.Font.bold],

	pointer: variables.Cursor.pointer,

	hover: {
		light: [
			darkTheme.BgColor.light.hover
			, style.BgColor.light.hover
		],

		dark: {
			default: [style.BgColor.default.hover, darkTheme.BgColor.default.hover]
			, primary: [style.BgColor.primary.hover, darkTheme.BgColor.primary.hover]
			, warning: [style.BgColor.warning.hover, darkTheme.BgColor.warning.hover]
			, danger: [style.BgColor.danger.hover, darkTheme.BgColor.danger.hover]
			, success: [style.BgColor.success.hover, darkTheme.BgColor.success.hover]
		},

		borderless: [
			darkTheme.Border.light.hover
			, style.Border.color.light.hover
		],

		plain: {
			default: variables.BorderColor.hover.default
			, primary: variables.BorderColor.hover.primary
			, warning: variables.BorderColor.hover.warning
			, danger: variables.BorderColor.hover.danger
			, success: variables.BorderColor.hover.success
		},

	},



	theme: {
		// 浅色及默认按钮
		light: {
			base: [
				variables.BackgroundColor.light
				// , style.BgColor.light.hover
				, style.Border.none

				, darkTheme.BgColor.light.bg
				// , darkTheme.BgColor.light.hover
			],
			
			// default: [style.Font.color.default, darkTheme.Font.default],
			// primary: [style.Font.color.primary, darkTheme.Font.primary],
			// warning: [style.Font.color.warning, darkTheme.Font.warning],
			// danger: [style.Font.color.danger, darkTheme.Font.danger],
			// success: [style.Font.color.success, darkTheme.Font.success],

			default: variables.TextColor.default
			, primary: variables.TextColor.primary
			, warning: variables.TextColor.warning
			, danger: variables.TextColor.danger
			, success: variables.TextColor.success

		},

		// 实心按钮
		dark: {
			base: [ style.Border.none, style.Font.color.white],

			default: variables.BackgroundColor.gray,
			primary: variables.BackgroundColor.primary,
			warning: variables.BackgroundColor.warning,
			danger: variables.BackgroundColor.danger,
			success: variables.BackgroundColor.success,

			// primary: [
			// 	style.BgColor.primary.bg,
			// ],

			// warning: [
			// 	style.BgColor.warning.bg,
			// ],

			// danger: [
			// 	style.BgColor.danger.bg,
			// ],

			// success: [
			// 	style.BgColor.success.bg,
			// ],

		},

		// 无边框
		borderless: {
			base: [
				style.BgColor.none
				, style.Border.none
			],

			default: variables.TextColor.default
			, primary: variables.TextColor.primary
			, warning: variables.TextColor.warning
			, danger: variables.TextColor.danger
			, success: variables.TextColor.success

			// default: [style.Font.color.default, darkTheme.Font.default],
			// primary: [style.Font.color.primary, darkTheme.Font.primary],
			// warning: [style.Font.color.warning, darkTheme.Font.warning],
			// danger: [style.Font.color.danger, darkTheme.Font.danger],
			// success: [style.Font.color.success, darkTheme.Font.success],
		},

		
   // 线框
	 plain: {
		base: [style.BgColor.none, style.Border.base],

		default: [
			variables.BorderColor.default
			, variables.TextColor.default
		],

		primary: [
			variables.BorderColor.primary
			, variables.TextColor.primary
		],

		warning: [
			variables.BorderColor.warning
			, variables.TextColor.warning
		],

		danger: [
			variables.BorderColor.danger
			, variables.TextColor.danger
		],

		success: [
			variables.BorderColor.success
			, variables.TextColor.success
		]

	 }

	},

	shape: {
		square: variables.Rounded.base,
		circle: variables.Rounded.full,
		left: {
			default: variables.Rounded.left.default
			, large: variables.Rounded.left.large
			, small: variables.Rounded.left.small
		},

		right: {
			default: variables.Rounded.right.default
			, large: variables.Rounded.right.large
			, small: variables.Rounded.right.small
		}
	},

	size: {
		default: variables.Padding.button.default,
		large: variables.Padding.button.large,
		small: variables.Padding.button.small
	},

	divide: [ 
		variables.Divide.horizontal
		, style.Border.color.light.base
		, darkTheme.Border.light.default
	],

	block: variables.Width.full,	

	disabled: [variables.Opacity.large, variables.Cursor.disable]
}


