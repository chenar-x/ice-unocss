import React from 'react';
import { Typography } from '@douyinfe/semi-ui';

const { Paragraph } = Typography;

import pgCss from './paragraph.styl'

function UParagraph(props) {
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
		, spacing
	} = props

	// console.log( pgCss() );

  return (
		<Paragraph
			className={ 
				pgCss(
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
				)
			}
			
			copyable = { copyable ? copyable : undefined }
			ellipsis = { ellipsis ? ellipsis : undefined }
			style = { style ? style : undefined }
		>
			{props.children}
		</Paragraph>
  );
}

export default UParagraph;
