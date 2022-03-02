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
				style.ButtonProps.theme.light.base,
				type === undefined ? style.ButtonProps.theme.light.default
				: [style.ButtonProps.theme.light.base, style.ButtonProps.theme.light[type]],
				
				size === undefined ? style.ButtonProps.size.default 
				: style.ButtonProps.size[size],

				disabled ? style.ButtonProps.disabled : style.ButtonProps.pointer,

				// left and right rounded
				index === itemCount - 1 ? 
					size ===  undefined ? style.ButtonProps.shape.right.default
					: style.ButtonProps.shape.right[size]
					: index === 0 ?
					size ===  undefined ? [style.ButtonProps.shape.left.default, style.ButtonProps.divide]
					: [ style.ButtonProps.shape.left[size], style.ButtonProps.divide ]
				: style.ButtonProps.divide

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
