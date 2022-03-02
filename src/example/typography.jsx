import React from 'react';
import { Space, Toast } from '@douyinfe/semi-ui';

import Typography from '../components/Typography';

import { IconLink } from '@douyinfe/semi-icons';

function PTypography(props) {
	const {
		theme
	} = props

	const { Title, Text, Paragraph } = Typography

  return (
    <>
			<Space align='start' vertical>
				<Title theme = {theme}>标题组件</Title>
				<Title theme = {theme} heading={2}>标题组件 H2</Title>
				<Title theme = {theme} heading={3}>标题组件 H3</Title>
				{/* <Title heading={4} theme= {theme} >标题组件 H4</Title>
				<Title heading={5} theme= {theme} >标题组件 H5</Title>
				<Title heading={6} theme= {theme} >标题组件 H6</Title>
				<Title heading={5} ellipsis = {{ showTooltip: true }} theme= {theme} style={{ width: 150 }}>是一个很长很长很长很长5号标题</Title> 
				<Title heading={4} theme= {theme} type="secondary" del>标题组件 H4</Title>
				<Title heading={4} theme= {theme} type="tertiary" disabled>标题组件 Del</Title>
				<Title heading={4} theme= {theme} type="success" underline>标题组件 H4</Title>
				<Title heading={4} theme= {theme} link={{ href: 'https://www.g.cn' }}>标题组件 H4</Title> */}
			</Space>
			<br /><br />
		
      <Space align='start' vertical>
				<Text theme= {theme} type="secondary">文本组件:</Text>
				<Text theme= {theme} size='small'>小文本</Text>
				<Text theme= {theme}>默认大小</Text>
				<Text theme= {theme} type="secondary">Secondary</Text>
				
				<Text theme= {theme} strong type="tertiary">Tertiary</Text>
				<Text theme= {theme} strong type="primary">Primary</Text>
				<Text theme= {theme} type="warning">Warning</Text>
				<Text theme= {theme} type="danger">Danger</Text>
				<Text theme= {theme} type="success">Success</Text>
				<Text theme= {theme} del>Deleted</Text>
				<Text theme= {theme} underline>Underline</Text>
				<Text theme= {theme} code>Example Code</Text>
				<Text theme= {theme} mark>Default Mark</Text>
				<Text theme= {theme} disabled>Disabled</Text>

				<Text theme= {theme} link={{ href: 'https://www.g.cn' }}>链接文本</Text>
				<Text theme= {theme} link underline>带下划线的链接文本</Text>
				<Text link icon={<IconLink />} underline>带下划线的网页链接</Text>

				<Text 
						theme= {theme}
						ellipsis={{ 
								showTooltip:{
									opts: { content: 'hhhhh这是自定义要展示的内容' }
								}
						}}
						style={{ width: 150 }}
				>
					可以自定义浮层里的展示内容试试看吧
				</Text>

				<Text theme= {theme}  copyable={{ content: 'Hello, Semi Design!' }}>点击复制文本。</Text>
        <Text  theme= {theme}  copyable={{ onCopy: () => Toast.success({ content: '复制文本成功'}) }}>Tips alert提示复制文本。</Text>

				<Text theme= {theme} copyable>点击右边的图标复制文本。</Text>

				<Text theme= {theme} ellipsis={{ rows: 2, expandable: true, collapsible: true, collapseText: '折叠我吧', onExpand: (bool, e) => console.log(bool, e) }} style={{ width: 300 }}>
					支持展开和折叠：Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
				</Text>

				<Text theme= {theme} link ellipsis={{ showTooltip: true, pos: 'middle' }}  style={{ width: 150 }}>
						是一个很长很长很长很长的链接
				</Text>

				<Text theme= {theme} ellipsis={{ suffix: '小尾巴' }} style={{ width: 300 }}>
                有后缀的情况：Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。
        </Text>

				<Text theme= {theme} ellipsis={{ rows: 5 }} style={{ width: 150}}>
						这是一个多行截断的例子：Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
				</Text>

				<Text theme= {theme} ellipsis={{ rows: 3, showTooltip: {type: 'popover', opts: {style: {width: 300}}} }} style={{ width: 300 }}>
						多行截断，展示 Popover：Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
				</Text>
		
			</Space>
			<br /><br />
			<Title heading={4} theme= {theme} >默认行距</Title>
			<Paragraph theme= {theme} type="success" style={{ width: 300 }}>
					Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
			</Paragraph>

			<br /><br />
			<Title heading={4} theme= {theme} >宽松行距 </Title>
			<Paragraph theme= {theme} spacing='extended' underline style={{ width: 300 }}>
					Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
			</Paragraph>
			<Paragraph theme= {theme} copyable={{ content: 'Hello, Semi Design!' }}>点击右边的图标复制文本。</Paragraph>
			<Paragraph theme= {theme} copyable >点击复制文本。</Paragraph>

			<Paragraph theme= {theme} ellipsis={{ rows: 2, expandable: true, collapsible: true, collapseText: '折叠我吧', onExpand: (bool, e) => console.log(bool, e) }} style={{ width: 300 }}>
				支持展开和折叠：Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
			</Paragraph>



    </>
  );
}

export default PTypography;
