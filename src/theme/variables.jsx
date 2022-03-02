
//---- Color name ----
const ThemeColor = {
	primary: 'blue-500',
	primaryEnd: 'blue-600',

	warning: 'amber-500',
	warningEnd: 'amber-600',

	danger: 'red-500',
	dangerEnd: 'red-600',

	success: 'emerald-500',
	successEnd: 'emerald-600',

	gray: 'gray-500',
	grayEnd: 'gray-600',

	light: 'gray-100',
	lightEnd: 'gray-200',

	white: 'light-200',
	black: 'dark-500',

}

const TextColor = {
	primary: 'text-blue-500',
	warning: 'text-amber-500',
	danger: 'text-red-500',
	success: 'text-emerald-500',
	gray: 'text-gray-500',

	white: 'text-light-200',
	default: 'text-dark-500 dark:text-light-200',
}

const BackgroundColor = {
	primary: 'bg-blue-500',
	warning: 'bg-amber-500',
	danger: 'bg-red-500',
	success: 'bg-emerald-500',
	gray: 'bg-gray-500',

	light: 'bg-gray-100 dark:bg-opacity-8',

	white: 'bg-light-200',
	default: 'bg-dark-500',

}

const BorderColor = {
	primary: 'border-blue-500',
	warning: 'border-amber-500',
	danger: 'border-red-500',
	success: 'border-emerald-500',
	gray: 'border-gray-500',

	white: 'border-light-200',
	default: 'border-dark-500',

	hover: {
		primary: 'hover:border-blue-300',
		warning: 'hover:border-amber-300',
		danger: 'hover:border-red-300',
		success: 'hover:border-emerald-300',
		gray: 'hover:border-gray-300',
	
		white: 'hover:border-light-300',
		default: 'hover:border-gray-400',		
	}
}




//---- Animation ----
const AnimateDur = 'duration-200'

//---- Opacity ----
const Opacity = {
	none: 'opacity-0',
	small: 'opacity-8',
	base: 'opacity-15',
	large: 'opacity-64',
}

//---- Rounded ----
const Rounded = {
	base: 'rounded',
	small: 'rounded-sm',
	large: 'rounded-lg',
	full: 'rounded-full',

	left: {
		default: 'rounded-l',
		large: 'rounded-l-lg',
		small: 'rounded-l-sm'		
	},

	right: {
		default: 'rounded-r',
		large: 'rounded-r-lg',
		small: 'rounded-r-sm'		
	}
}

//---- Cursor ----
const Cursor = {
	pointer: 'cursor-pointer',
	disable: 'cursor-not-allowed'
}

//---- Divide ----
const Divide = {
	vertical: 'border-b border-l-0 border-t-0 border-r-0',
	horizontal: 'border-r border-l-0 border-t-0 border-b-0'
}

//---- Padding ----
const Padding = {
	button: {
		default: 'py-6px px-12px',
		small: 'py-1 px-2',
		large: 'py-12px px-16px'
	}
}

//---- Width ----
const Width = {
	full: 'w-full'
}


export {
	ThemeColor,
	TextColor,
	BackgroundColor,
	BorderColor,
	AnimateDur,
	Opacity,
	Rounded,
	Cursor,
	Divide,
	Padding,
	Width
}
