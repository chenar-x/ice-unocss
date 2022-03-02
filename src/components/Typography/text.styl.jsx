import classnames from 'classnames'

import {
	fontSize
	, tCss
	// , delCss
	// , strongCss
	// , uLineCss
	// , ellipsisCss
	// , disabledCss
} from './trpography.styl'

const fontCss = (
	type, 
	theme, 
	size,
	strong, 
	underline, 
	del, 
	disabled, 
	link, 

	ellipsis
) =>  { 
	return classnames(
		fontSize( size )
		, tCss(theme, type)

	// , delCss(del)
	// , strongCss(strong)
	// , uLineCss( underline, link )
	// , ellipsisCss( ellipsis ) 
	// , disabledCss( theme, disabled )
	)
}

export default fontCss