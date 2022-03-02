import React from 'react';
import { Typography } from '@douyinfe/semi-ui';

import fontCss from './text.styl'

const { Text } = Typography;


function UText(props) {
	const { 
		type
		, theme
		, size

		, strong
		, underline
		, del
		, code
		, mark
		, disabled

		, link
		, ellipsis
		, style

		, copyable
		, icon
	} = props

  return (
			<Text
				ellipsis = { ellipsis ? ellipsis : null }
				copyable = { copyable ? copyable : null }
				style = {style ? style : null}
				link = {link ? link : null}
				icon = {icon ? icon : null}
				className = { 
					fontCss(
						type, theme, size,
						strong, underline, del, disabled, 
						link, ellipsis
					) 
				}
			>
				{
					// mark 
					// ? <mark className= {markCss( theme )}> {props.children} </mark> 
					// 	: code ? <code className={codeCss( theme )}> {props.children} </code> 
					props.children
				}
			</Text>
  );
}

export default UText;
