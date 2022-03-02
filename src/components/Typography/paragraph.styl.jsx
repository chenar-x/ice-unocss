import { cStyle } from '../Css'
import classnames from 'classnames'

import {
	fontSize
	, tCss

	, delCss
	, strongCss
	, uLineCss
	, ellipsisCss
	, disabledCss
} from './trpography.styl'

const pgCss = (
	type, 
	theme, 
	size,
	strong, 
	underline, 
	del, 
	disabled, 
	link, 
	ellipsis,
	spacing
) => {
	return classnames(
		fontSize( size )
		, tCss(theme, type)

		, cStyle.margin.none
		, fontSize( size )

		, tCss( theme, type )
		, delCss( del )
		, strongCss( strong )
		, uLineCss( underline, link )
		, ellipsisCss( ellipsis ) 
		, disabledCss( theme, disabled )
		, spacing === 'extended' 
				? cStyle.FontBase.space 
				: null
	)
}

export default pgCss