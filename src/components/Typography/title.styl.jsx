import { cTheme, cStyle } from '../Css'
import classnames from 'classnames'

import {
	tCss
	, ellipsisCss
	, uLineCss
	, delCss
	, disabledCss
} from './trpography.styl'

// function UTitle(props) {
// function titleCss(props) {
// 	const {
// 		theme, 
// 		heading, 
// 		ellipsis,
// 		type, 

// 		del,
// 		underline,
// 		disabled,
// 		link
// 	} = props

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

// console.log(titleCss);
// export default titleCss

const titleCss = (
	theme, 
	heading, 
	ellipsis,
	type, 

	del,
	underline,
	disabled,
	link
) =>  { 
	const fLevel = heading === undefined ? 'h1' : 'h' + heading
	return classnames(
		cStyle.margin.none,
		tCss(theme, type),
		heading === undefined 
			? cStyle.FontBase.size.h1 
			: cStyle.FontBase.size[fLevel]
			
		, ellipsisCss( ellipsis ) 
		, uLineCss( underline, link )
		, delCss( del )
		, disabledCss( theme, disabled )
)
}


export default titleCss


