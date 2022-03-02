import * as variables from './variables'

// default is light theme
//---- Border ----
const Border = {
	none: 'border-0',
	base: 'border',

	color: {
		// default: `border-${variables.ThemeColor.gray}`,
		// primary: `border-${variables.ThemeColor.primary}`,
		// warning: `border-${variables.ThemeColor.warning}`,
		// danger: `border-${variables.ThemeColor.danger}`,
		// success: `border-${variables.ThemeColor.success}`,

		light: {
			base: `border-${variables.ThemeColor.lightEnd}`,
			hover: `border-${variables.ThemeColor.light}`
		},

		default: {
			base: `border-${variables.ThemeColor.gray}`,
			hover: `hover:border-${variables.ThemeColor.grayEnd}`
		},

		primary: {
			base: `border-${variables.ThemeColor.primary}`,
			hover: `hover:border-${variables.ThemeColor.primaryEnd}`
		},

		warning: {
			base: `border-${variables.ThemeColor.warning}`,
			hover: `hover:border-${variables.ThemeColor.warningEnd}`
		},

		danger: {
			base: `border-${variables.ThemeColor.danger}`,
			hover: `hover:border-${variables.ThemeColor.dangerEnd}`
		},

		success: {
			base: `border-${variables.ThemeColor.success}`,
			hover: `hover:border-${variables.ThemeColor.successEnd}`
		},
	}
}

//---- Bg Color ----
const BgColor = {
	none: 'bg-transparent',

	light: {
		bg: `bg-${variables.ThemeColor.light}`,
		hover: `hover:bg-${variables.ThemeColor.lightEnd}`
	},

	default: {
		bg: `bg-${variables.ThemeColor.light}`,
		hover: `hover:bg-${variables.ThemeColor.grayEnd}`
	},

	primary: {
		bg: `bg-${variables.ThemeColor.primary}`,
		hover: `hover:bg-${variables.ThemeColor.primaryEnd}`
	},

	warning: {
		bg: `bg-${variables.ThemeColor.warning}`,
		hover: `hover:bg-${variables.ThemeColor.warningEnd}`
	},
	
	danger: {
		bg: `bg-${variables.ThemeColor.danger}`,
		hover: `hover:bg-${variables.ThemeColor.dangerEnd}`
	},

	success: {
		bg: `bg-${variables.ThemeColor.success}`,
		hover: `hover:bg-${variables.ThemeColor.successEnd}`
	},

	// primary: `bg-blue-500`
}

//---- Font ----
// console.log(ThemeColor.light);
const Font = {
	color: {
		default: 'text-gary-100',	
		light: [`text-${variables.ThemeColor.white}`],
		
		primary: [`text-${variables.ThemeColor.primaryEnd}`],
		warning: [`text-${variables.ThemeColor.warningEnd}`],
		danger: [`text-${variables.ThemeColor.dangerEnd}`],
		success: [`text-${variables.ThemeColor.successEnd}`],

		white: `text-${variables.ThemeColor.white}`,

	},

	size: {
		default: 'text-sm',
		small: 'text-xs',
		large: 'text-base'
	},

	bold: 'font-semibold'
}


export {
	Font,
	Border,
	BgColor,


}