import React from 'react';
import { Typography } from '@douyinfe/semi-ui';

import titleCss from './title.styl';

const { Title } = Typography;

// function UTitle() {
function UTitle(props) {
	const { 
		theme,
		style,
		ellipsis,
		heading,
		type, 
		mark, 
		del,

		link,
		underline,
		disabled, 

		copyable
	} = props

	return (
		<Title
			heading={ heading }
			className={ 
				titleCss(
					theme, 
					heading, 
					ellipsis,
					type, 
				
					del,
					underline,
					disabled,
					link
				)
			}
			style = {style ? style : undefined}
			ellipsis = {ellipsis ? ellipsis : undefined}
			copyable = { copyable ? copyable : null }
			link = {link ? link : null}

		>
			{ 
				mark 
				? <mark className= {markCss( theme )}> {props.children} </mark> 
				: props.children
			}
		</Title>
	)
}
// }

export default UTitle;
