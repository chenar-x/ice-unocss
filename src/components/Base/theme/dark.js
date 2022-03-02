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

	, opacity
	, hover
	, gray
	, border
} = kmConst

const cDefault = (type) => Rule([type, gray, 50], [dark])

const BgColor = {
	...colorGroup(bg, hover, dark)
	, light: cDefault(bg)
	, dark: Rule([bg, gray, 800], [dark])
}

const FontColor = {
	...colorGroup(text, hover, dark)
	, light: {
		base: cDefault(text)
		, hover: cDefault(text)
	}

	, dark: {
		base: Rule([text, gray, 800], [dark])
		, hover: Rule([text, gray, 800], [dark])
	}

	, secondary: {
		base: [cDefault(text), Rule([text, opacity, 60], [dark]) ]
		, hover: [cDefault(text), Rule([text, opacity, 70], [dark])]
	}
	, tertiary: {
		base: [cDefault(text), Rule([text, opacity, 30], [dark])]
		, hover: [cDefault(text), Rule([text, opacity, 40], [dark])]
	}
}

const BorderColor = {
	...colorGroup(border, hover)
	, default: cDefault(border)
}

const Opacity = basic.reduce((r,c) => {
	r[c] = r[c] || []
	r[c] = sizeGroup(opacityLevel, Rule([c, opacity]), opacityOption, dark)
	return r
},{})



export default {
	BgColor
	, FontColor
	, BorderColor

	, Opacity
}