import * as variables from '../Style/variables'
import * as themeDark from '../Style/dark'


export const ButtonProps = {
	// 共有样式
	base: [variables.Font.bold, variables.AnimateDur],

	fontColor: {
		default: [
			variables.Font.color.default
			, themeDark.Font.color.default
		]
		, primary: variables.Font.color.primary.base
		, warning: variables.Font.color.warning.base
		, danger: variables.Font.color.danger.base
		, success: variables.Font.color.success.base
	},
	
	bg: {
		default: variables.BgColor.gray.base
		, primary: variables.BgColor.primary.base
		, warning: variables.BgColor.warning.base
		, danger: variables.BgColor.danger.base
		, success: variables.BgColor.success.base
	},

	border: {
		default: variables.Border.color.gray.base
		, primary: variables.Border.color.primary.base
		, warning: variables.Border.color.warning.base
		, danger: variables.Border.color.danger.base
		, success: variables.Border.color.success.base

		, divide: [variables.Border.right, variables.Border.color.light, themeDark.Border.light]
	},

	// 按钮主题
	theme: {
		light: [
			variables.BgColor.light.base
			, themeDark.BgColor.light.base
			, variables.Border.none
		]
		, dark: [
				variables.Border.none
				, variables.Font.color.light.base
			]
		, plain: [
			variables.Border.base
			, variables.BgColor.none
		]
		, borderless: [
			variables.Border.none
			, variables.BgColor.none
		]
	},

	// 鼠标悬停效果
	hover: {
		base: variables.Cursor.pointer
		, light: [
				variables.BgColor.light.hover
				, themeDark.BgColor.light.hover
			]
		, dark: {
			default: variables.BgColor.gray.hover
			, primary: variables.BgColor.primary.hover
			, warning: variables.BgColor.warning.hover
			, danger: variables.BgColor.danger.hover
			, success: variables.BgColor.success.hover
		}
		, plain: {
			default: variables.Border.color.gray.hover
			, primary: variables.Border.color.primary.hover
			, warning: variables.Border.color.warning.hover
			, danger: variables.Border.color.danger.hover
			, success: variables.Border.color.success.hover			
		}
	},

	// 按钮尺寸
	size: {
		default: [variables.Padding.button.default, variables.Font.size.default]
		, large: [variables.Padding.button.large, variables.Font.size.large]
		, small: [variables.Padding.button.small, variables.Font.size.small]
	},

	// 按钮形状
	rounded: {
		full: variables.Rounded.full,

		base: variables.Rounded.base,
		small: variables.Rounded.small,
		large: variables.Rounded.large,

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

	// 整行
	block: variables.Sizing.width.full,

	// 不可用
	disabled: [variables.Cursor.disable, variables.Opacity.large]
}
