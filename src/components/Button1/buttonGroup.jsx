import React, { useState } from 'react';

import classnames from 'classnames'

import * as style from './button.styl.jsx'

const UButtonGroup = ( props ) => {
	const {
		type
		, size
		, disabled
	} = props;

	const itemCount = React.Children.count(props.children)

	const items = React.Children.map(props.children, (item, index) => {
		return React.cloneElement(item, { groupButton: 
			classnames([
				style.ButtonProps.base,
				style.ButtonProps.theme.light,

				type === undefined 
				? [style.ButtonProps.theme.light, style.ButtonProps.fontColor.default] 
				: [style.ButtonProps.theme.light, style.ButtonProps.fontColor[type]],

				size === undefined
				? style.ButtonProps.size.default
				: style.ButtonProps.size[size],

				disabled
				? style.ButtonProps.disabled
				: [style.ButtonProps.hover.light, style.ButtonProps.hover.base],

				// left and right rounded
				index === itemCount - 1 
				? size ===  undefined 
					? style.ButtonProps.rounded.right.default
					: style.ButtonProps.rounded.right[size]
				: index === 0 
					? size ===  undefined 
						? [style.ButtonProps.rounded.left.default, style.ButtonProps.border.divide]
						: [ style.ButtonProps.rounded.left[size], style.ButtonProps.border.divide ]
					: style.ButtonProps.border.divide

			]) 
	})
		
	})

  return (
		<div>	
			{ items }
		</div>
  );
}

export default UButtonGroup;
