import React from 'react';

import { Button } from '@douyinfe/semi-ui';
import classnames from 'classnames'

import * as style from './button.styl.jsx'

function UButton(props) {
	const { 
		type
		, size
		, block

		, onClick
		, onMouseDown
		, onMouseEnter
		, onMouseLeave

		, disabled
		, theme
		, shape
		, icon
		, iconPosition
		, loading

		, groupButton
	} = props;

	const hover = classnames(
		style.ButtonProps.hover.base, 
		theme === undefined || theme === 'light' || theme === 'borderless' 
		? style.ButtonProps.hover.light
		: theme === 'dark' 
			? type === undefined ? style.ButtonProps.hover.dark.default : style.ButtonProps.hover.dark[type]
		: type === undefined ? style.ButtonProps.hover.plain.default : style.ButtonProps.hover.plain[type]
	)

	const buttonClass = classnames(		
		style.ButtonProps.base,

		theme === undefined || theme === 'light' 
		? type === undefined 
			? [style.ButtonProps.theme.light, style.ButtonProps.fontColor.default] 
			: [style.ButtonProps.theme.light, style.ButtonProps.fontColor[type]]
		: theme === 'dark' 
		? type === undefined 
			? [style.ButtonProps.theme.dark, style.ButtonProps.bg.default] 
			: [style.ButtonProps.theme.dark, style.ButtonProps.bg[type]]
		: theme === 'plain'
		? type === undefined
			? [style.ButtonProps.theme[theme], style.ButtonProps.border.default, style.ButtonProps.fontColor.default] 
			: [style.ButtonProps.theme[theme], style.ButtonProps.border[type], style.ButtonProps.fontColor[type]] 
		: type === undefined
			? [style.ButtonProps.theme.borderless, style.ButtonProps.fontColor.default] 
			: [style.ButtonProps.theme.borderless, style.ButtonProps.fontColor[type]], 

		size === undefined
		? style.ButtonProps.size.default
		: style.ButtonProps.size[size],

		shape === undefined || shape === 'rounded'
		? size === undefined || size === 'default' ? style.ButtonProps.rounded.base
			: style.ButtonProps.rounded[size]
		: style.ButtonProps.rounded.full,

		block ? style.ButtonProps.block : null,		

		disabled
		? style.ButtonProps.disabled
		: hover
	)


  return (
		<Button
			onClick = { onClick }
		  onMouseDown = { onMouseDown }
			onMouseEnter = { onMouseEnter }
			onMouseLeave = { onMouseLeave}

			className = {	buttonClass
				// groupButton === undefined
				// ? buttonClass
				// : groupButton
			}

			icon = { icon }
			iconPosition = { iconPosition }
			loading = {loading} 
		>
			{ props.children }
		</Button> 
  );
}

export default UButton;
