import { kmFn } from './cssRules.js'

const constants = [
	'hover'
	, 'dark'

	, 'font'
	, 'semibold'

	, 'bg'
	, 'text'
	, 'border'

	, 'transparent'

	, 'w', 'h', 'r', 'b', 'l', 't'

	, 'full'
	, 'lg'
	, 'sm'
	, 'xs'
	, 'base'

	, 'm'
	, 'px', 'py'
	, 'opacity'

	, 'rounded'
	, 'duration'

	, 'cursor'
	, 'not'
	, 'allowed'
	, 'pointer'
	, 'no'
	
	, 'hover' 

	,'blue', 'amber', 'red',  'emerald', 'gray'

	,'line', 'through', 'underline'

	,'leading', 'normal', 'flex', 'inline'
	,'truncate'
]

const kmConst = kmFn(constants)

//---- Opacity ----
const baseLevel = ['none', 'small', 'base', 'large']

const baseSize = ['default', 'large', 'small']
const roundLevel = ['small', 'large', 'full']
const roundPart = ['left', 'right']

const cursorType = ['pointer', 'disable']

const pxSize = ['12px', '16px', 2]
const pySize = ['6px', '12px', 1]

const basic = ['border', 'text', 'bg']

//---- colors ----
const colors = {
	primary: ['blue', 500]
	, warning: ['amber',500]
	, danger: ['red',500]
	, success: ['emerald', 500]
	, gray: ['gray',500]
}

const fontSize = {
	small: 'xs'
	, normal: 'sm'
	, h6: 'base'
	, h5: 'lg'
	, h4: 'xl'
	, h3: '2xl'
	, h2: '3xl'
	, h1: '4xl'
}


export {
	kmConst

	, baseLevel
	, baseSize
	, roundLevel
	, roundPart

	, cursorType
	, pxSize
	, pySize

	, colors

	, basic
	, fontSize
} 