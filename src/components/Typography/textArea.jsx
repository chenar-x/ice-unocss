import React from 'react';
import { TextArea } from '@douyinfe/semi-ui';

function UTextArea() {
  return (
		<TextArea
			type="success"
		>
			{props.children}
		</TextArea>
  );
}

export default UTextArea;
