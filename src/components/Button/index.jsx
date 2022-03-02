import React from 'react';

import { Button } from '@douyinfe/semi-ui';

import {
	btnCss
} from './button.styl'

function UButton(props) {
	const { 
		onClick
		, theme
		, type
		, size
		, skin
	} = props

  return (
    <Button
		 	className = { btnCss(type, skin, size, theme ) }
			onClick = { onClick }
		>
			{ props.children }
		</Button>
  );
}

export default UButton;
