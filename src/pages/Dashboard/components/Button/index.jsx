import React, { useState } from 'react';
import { Button } from '@douyinfe/semi-ui';

import classnames from 'classnames'

import * as style from './button.styl.jsx'



function UButton (props) {
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


	const hoverEffect = classnames(
		theme === undefined || theme === 'light' ||  theme === 'borderless'
		? style.ButtonProps.hover.light
		: theme === 'dark' 
			? type === undefined ? style.ButtonProps.hover.dark.default : style.ButtonProps.hover.dark[type]
			: type === undefined ? style.ButtonProps.hover.plain.default : style.ButtonProps.hover.plain[type]			  
	)


	const buttonClass = classnames(
		style.ButtonProps.base,

		theme === undefined
		? type === undefined ? [style.ButtonProps.theme.light.base, style.ButtonProps.theme.light.default] 
			: [style.ButtonProps.theme.light.base, style.ButtonProps.theme.light[type]] 
		:	type === undefined ? [style.ButtonProps.theme[theme].base, style.ButtonProps.theme[theme].default]
			:[style.ButtonProps.theme[theme].base, style.ButtonProps.theme[theme][type]],

		shape === undefined 
		? style.ButtonProps.shape.square
		: style.ButtonProps.shape[shape],
		
		size === undefined 
		? style.ButtonProps.size.default
		: style.ButtonProps.size[size],

		block ? style.ButtonProps.block : null,

		disabled 
		? style.ButtonProps.disabled 
		: [style.ButtonProps.pointer, hoverEffect]
	
	)

  return (
		<Button
			onClick = { onClick }
		  onMouseDown = { onMouseDown }
			onMouseEnter = { onMouseEnter }
			onMouseLeave = { onMouseLeave}

			className = {	
				groupButton === undefined
				? buttonClass
				: groupButton
			}

			icon = { icon }
			iconPosition = { iconPosition }
			loading = {loading} 
		>
			{ props.children }
		</Button>  );
}

export default UButton;
