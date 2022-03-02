import * as variables from './variables'

const Font = {
	// default: `dark:text-${color1}`
		default: 'dark:text-light-500'
	, primary: 'dark:text-blue-500'
	, warning: 'dark:text-amber-500'
	, danger: 'dark:text-red-500'
	, success: 'dark:text-emerald-500'	
}


const BgColor = {
	light: {
		bg: `dark:bg-${variables.Opacity.small}`,
		hover: `dark:hover:bg-${variables.Opacity.base}`
	},

	default: {
		bg: `dark:bg-gray-600`,
		hover: `dark:hover:bg-gray-400`
	},

	primary: {
		bg: `dark:bg-blue-600`,
		hover: `dark:hover:bg-blue-400`
	},

	warning: {
		bg: `dark:bg-amber-600`,
		hover: `dark:hover:bg-amber-400`
	},
	
	danger: {
		bg: `dark:bg-red-600`,
		hover: `dark:hover:bg-red-400`
	},

	success: {
		bg: `dark:bg-emerald-600`,
		hover: `dark:hover:bg-emerald-400`
	},	
}

const Border = {
	light: {
		default: `dark:border-${variables.Opacity.small}`,
		hover: `dark:hover:border-${variables.Opacity.base}`
	}
}

export {
	Font,
}
