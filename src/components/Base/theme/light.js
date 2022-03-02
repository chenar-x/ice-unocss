import { Rule } from '../cssRules.js'

import { 
	kmConst 
	, opacityLevel
	, opacityOption
	, basic
} from '../constants.js';

import {
	colorGroup
	, sizeGroup
	, nestedGroup
} from '../structure.js'

const { 
	dark
	, bg
	, text
	, border

	, gray

	, hover
	, opacity
} = kmConst

const cDefault = (type) => Rule([type, gray, 800])

const BgColor = {
	...colorGroup(bg, hover)
	, dark: cDefault(bg)
	, light: Rule([bg, gray, 50])
}

const FontColor = {
	...colorGroup(text, hover)

	, light: {
		base: Rule([text, gray, 50])
		, hover: Rule([text, gray, 50])
	}

	, dark: {
		base: cDefault(text)
		, hover: cDefault(text)
	}

	, secondary: {
		base: [cDefault(text), Rule([text, opacity, 60]) ]
		, hover: [cDefault(text), Rule([text, opacity, 70])]
	}
	, tertiary: {
		base: [cDefault(text), Rule([text, opacity, 30])]
		, hover: [cDefault(text), Rule([text, opacity, 40])]
	}
}

const BorderColor = {
	...colorGroup(border, hover)
	, default: cDefault(border) 
}

const Opacity = basic.reduce((r,c) => {
	r[c] = r[c] || []
	r[c] = sizeGroup(opacityLevel, Rule([c, opacity]), opacityOption)
	return r
},{})

export default {
	BgColor
	, FontColor
	, BorderColor

	, Opacity
}