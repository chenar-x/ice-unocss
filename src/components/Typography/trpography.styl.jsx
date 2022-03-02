import { cTheme, cStyle } from '../Css'

const themeCur = (tCss) => tCss === undefined || tCss === 'light' 
	? cTheme.light : cTheme.dark

const fontColor = (theme) => theme === undefined || theme === 'light' ? 'dark' : 'light'
const themeType = (tTheme,tType) => cTheme[tTheme].FontColor[tType].base

// theme and type
const tCss = (theme, type) => {
	return theme === undefined
					? type === undefined ? themeType('light', fontColor(theme)) : themeType('light', type)
					: type === undefined ? themeType(theme, fontColor(theme)) : themeType(theme, type)
}

// ellipsis
const ellipsisCss = (ellipsis) => ellipsis 
	? ellipsis.rows === undefined 
		? cStyle.FontBase.ellipsis : null 
	: null 

// disabled
const disabledCss = (theme, disabled) => disabled
	? [themeCur(theme).Opacity.text.base, cStyle.Cursor.disable]
	: null

// underline
const uLineCss = (underline, link) => underline
	? underline && link 
		? cStyle.FontBase.underline.hover 
		: cStyle.FontBase.underline.base
	: null

// delete 
const delCss = (del) => del ? cStyle.FontBase.del : null

// strong font
const strongCss = (strong) => strong ? cStyle.FontBase.bold : null

// font size
const fontSize = (size) => size === undefined 
	? cStyle.FontBase.size.normal
	: size === 'normal' 
		? cStyle.FontBase.size.normal 
		: cStyle.FontBase.size.small

// const fontCss = (
// 	type, 
// 	theme, 
// 	size,
// 	strong, 
// 	underline, 
// 	del, 
// 	disabled, 
// 	link, 

// 	ellipsis
// ) => classnames(
// 	fontSize( size )
// 	, tCss(theme, type)

// 	, delCss(del)
// 	, strongCss(strong)
// 	, uLineCss( underline, link )
// 	, ellipsisCss( ellipsis ) 
// 	, disabledCss( theme, disabled )
// )

// const linkCss = (theme) => classnames(
// 	themeCur(theme).FontColor.primary.base,
// 	themeCur(theme).FontColor.primary.hover, 

// 	cStyle.Cursor.pointer,
// 	cStyle.FontBase.noULine
// )

// const markCss = (theme) => classnames(
// 	themeCur(theme).BgColor.success.base, 
// 	themeCur(theme).Opacity.bg.base,
// )

// const codeCss = (theme) => classnames(
// 	// font
// 	themeCur(theme).FontColor[ fontColor(theme)].base,
// 	themeCur(theme).Opacity.text.large,

// 	// bg
// 	themeCur(theme).BgColor.gray.base,
// 	themeCur(theme).Opacity.bg.small,

// 	// border
// 	themeCur(theme).BorderColor.default,
// 	themeCur(theme).Opacity.border.small,

// 	// rounded & padding
// 	cStyle.BorderBase.base,
// 	cStyle.Rounded.small,
// 	cStyle.paddingX.small,
// 	cStyle.paddingY.small,
// )


// const titleCss = (
// 	theme, 
// 	heading, 
// 	ellipsis,
// 	type, 

// 	del,
// 	underline,
// 	disabled,
// 	link
// ) => { 	
// 	const fLevel = heading === undefined ? 'h1' : 'h' + heading

// 	return classnames(
// 		cStyle.margin.none,
// 		tCss(theme, type),
// 		heading === undefined 
// 			? cStyle.FontBase.size.h1 
// 			: cStyle.FontBase.size[fLevel]
			
// 		, ellipsisCss( ellipsis ) 
// 		, uLineCss( underline, link )
// 		, delCss( del )
// 		, disabledCss( theme, disabled )
// 	)
// }


// const pgCss = (
// 	type, 
// 	theme, 
// 	size,
// 	strong, 
// 	underline, 
// 	del, 
// 	disabled, 
// 	link, 
// 	ellipsis,
// 	spacing
// ) => classnames(
// 	cStyle.margin.none
// 	, fontSize( size )

// 	, tCss(theme, type)
// 	, delCss(del)
// 	, strongCss(strong)
// 	, uLineCss( underline, link )
// 	, ellipsisCss( ellipsis ) 
// 	, disabledCss( theme, disabled )
// 	, spacing === 'extended' ? cStyle.FontBase.space : null, 
// )


export {
	// fontCss
	// , markCss
	// , codeCss

	// , titleCss
	// , linkCss

	// , pgCss
	fontSize
	, tCss
	, delCss
	, disabledCss
	, uLineCss
	, ellipsisCss
	, strongCss
}
