import  { Rule }  from '../cssRules.js' 

import { 
	kmConst 

	, baseLevel

	, baseSize
	, roundLevel
	, roundPart

	, cursorType
	, pxSize
	, pySize
	
	, fontSize
} from '../constants.js';

import {
	sizeGroup
	, nestedGroup
	, kvGroup
} from '../structure.js'


const { 
	font
	, semibold

	, bg
	, text
	, border

	, transparent

	, w, r, b, l, t

	, full, lg, sm

	, m
	, px, py

	, opacity
	, rounded
	, duration

	, cursor
	, not
	, allowed
	, pointer

	, no
	, hover

	, gray, flex, inline

	, line, through, underline, leading, normal
	, truncate
} = kmConst

const BgColorBase = {
	// ...colorGroup(bg, hover)
	 none: Rule([bg, transparent])
}


const FontBase = {
	bold: Rule([font, semibold])
	, white: Rule([text, gray, 50])
	, size: kvGroup(fontSize, text)

	, secondary: Rule([text, opacity, 60])
	, tertiary: Rule([text, opacity, 30])

	, del: Rule([line, through])
	, noULine: Rule([no, underline])

	, space: Rule([leading, normal])
	, ellipsis: truncate

	, underline: {
		base: underline
		, hover: Rule([underline], [hover])
	}
}

// const FontColor = {
// 	...colorGroup(text, hover)

// 	// , base: Rule([text, gray, 800])
// 	// , light: default.base
// 	, white: Rule([text, gray, 50])
// }

const BorderT = Rule([border,t])
const BordeTNo = Rule([BorderT, 0])

const BorderR = Rule([border,r])
const BorderRNo = Rule([BorderT, 0])

const BorderB = Rule([border,b])
const BordeBNo = Rule([BorderB, 0])

const BorderL = Rule([border,l])
const BorderLNo = Rule([BorderL, 0])

const BorderBase = {
	base: border
	, none: Rule([border, 0])
	, bottom: [BorderB, BordeTNo, BorderRNo, BorderLNo]
	, right: [BorderR, BordeBNo, BordeTNo, BorderLNo]
}

const AnimateDur = Rule([duration, 200])

const Block = Rule([w, full])

const Rounded = {
	default: rounded,
	...sizeGroup(roundLevel, rounded, [sm, lg, full]),
	...nestedGroup(
		roundPart
		, baseSize
		, [ Rule([rounded, l]),  Rule([rounded, r])]
		, [lg, sm]
	)
}

const Cursor = sizeGroup(
	cursorType
	, cursor
	, [pointer, Rule([not, allowed])]
)

const paddingX = sizeGroup( baseSize, px, pxSize )
const paddingY = sizeGroup( baseSize, py, pySize )

const margin = sizeGroup(baseLevel, m, [0, 1, 2, 4])

// console.log(BgColor);

const layout = {
	flex: {
		inline: Rule([inline, flex])
	}
}

export default {
	BgColorBase
	, FontBase

	, BorderBase

	, AnimateDur

	, Block
	, Rounded
	, Cursor

	, paddingX
	, paddingY

	, margin
	, layout
}