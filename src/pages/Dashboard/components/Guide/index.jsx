import React, { useState } from 'react';

import { 
	IconCamera
	, IconDelete
	, IconChevronDown 
} from '@douyinfe/semi-icons';


import { Space } from '@douyinfe/semi-ui';
import Typography from '../../../../components/Typography'
import Button from '../../../../components/Button'

import light from '../../../../components/Css/light';
import dark from '../../../../components/Css/dark';

const cTheme = {
	light
, dark
}

const btnClick = () => {
	console.log( '11111');
}

 const switchMode = (theme) => {
	 return theme
 }


const Guide = () => {
	const [delLoading, setDelLoading] = useState(false);
	const [curTheme, setCurTheme] = useState('light')

	const groupBtnType = [
		{
			type: 'primary',
			size: 'small'
		},
		{
			type: 'warning',
		},
		{
			size: 'large',
		},
		{
			type: 'danger',
		},
		{
			type: 'success',
			disabled: true
		},
	]

	const lightBtn = [
		{
			block: true,
			onClick: btnClick,
			name: '浅色默认'
		},
		{
			block: true,
			type: 'primary',
			name: '浅色主要'
		},
		{
			block: true,
			type: 'warning',
			name: '浅色警告'
		},
		{
			block: true,
			type: 'danger',
			name: '浅色危险'
		},
		{
			block: true,
			type: 'success',
			name: '浅色成功'
		}
	]

	const menu = [
		{ node: 'title', name: '分组1' },
		{ node: 'item', name: 'primary1', type: 'primary', onClick: () => console.log('click primary') },
		{ node: 'item', name: 'secondary', type: 'secondary' },
		{ node: 'divider' },
		{ node: 'title', name: '分组2' },
		{ node: 'item', name: 'tertiary', type: 'tertiary' },
		{ node: 'item', name: 'warning', type: 'warning', active: true },
		{ node: 'item', name: 'danger', type: 'danger' },
	];	


	const { Title, Text } = Typography

	const bStyle = cTheme[curTheme].BgColor.default
	const bodyCss = (style) => document.getElementsByTagName('body')[0].className = style 

  return (
    <>
      {/* <h2 text="blue-400 3xl center" className = "dark:text-gray-50"></h2> */}
			<Title theme= {curTheme}  type="primary">icejs + semi + uno</Title>
			<Button onClick={() => curTheme === 'light' 
				? [ setCurTheme('dark'), bodyCss(bStyle) ]
				: [ setCurTheme('light'), bodyCss(bStyle) ]
			}> 切换主题 </Button>
			
			<br />
			{/* <Title theme= 'dark'>文本组件</Title>
			<Space vertical>
				<Text theme= 'dark'>哈哈哈</Text>
				<Text theme= 'dark' type="secondary">Secondary</Text>
				<Text theme= 'dark' strong type="tertiary">Tertiary</Text>
				<Text theme= 'dark' strong type="primary">Primary</Text>
				<Text theme= 'dark' type="warning">Warning</Text>
				<Text theme= 'dark' type="danger">Danger</Text>
				<Text theme= 'dark' type="success">Success</Text>
			</Space> */}

			<br />
			<Space vertical>
				<Text theme= {curTheme} type="secondary">文本组件:</Text>
				<Text theme= {curTheme}>Default</Text>
				<Text theme= {curTheme} strong type="secondary">Secondary</Text>
				<Text theme= {curTheme} strong type="tertiary">Tertiary</Text>
				<Text theme= {curTheme} strong type="primary">Primary</Text>
				<Text theme= {curTheme} type="warning">Warning</Text>
				<Text theme= {curTheme} type="danger">Danger</Text>
				<Text theme= {curTheme}type="success">Success</Text>
				<Text theme= {curTheme} del>Deleted</Text>
				<Text theme= {curTheme} underline>Underline</Text>
				<Text theme= {curTheme} code>Example Code</Text>
				<Text theme= {curTheme} mark>Default Mark</Text>
				<Text theme= {curTheme} disabled>Disabled</Text>
			</Space>
			
			
			<p text="bold gray-400">尺寸：</p>
			<div className = 'space-x-4'>
				<Button size="large"  type = 'warning' theme = 'dark'>大号按钮</Button>
				<Button size="default"  type = 'success'>默认按钮</Button>
				<Button size="small"   type = 'danger'>小号按钮</Button>
			</div>

			{/* <p text="bold gray-400">形状：</p>
			<div className = 'space-y-4'>
				<Button block theme='dark' shape = "circle" type = 'danger'>圆形按钮</Button>
				<Button block theme='dark' type = 'primary'>方形按钮</Button>
			</div> */}

			{/* <p text="bold gray-400">深色按钮：</p>
			<div className = 'grid md:grid-cols-5 sm:grid-cols-2 gap-x-4 gap-y-4 mt-3'>
				<Button>深色默认</Button>
				<Button skin="dark" type = 'primary' theme = 'dark'>深色主要</Button>
				<Button skin="dark" type = 'warning' theme = 'dark'>深色警告</Button>
				<Button skin="dark" type = 'danger' theme = 'dark'>深色危险</Button>
				<Button skin="dark" type = 'success' theme = 'dark'>深色成功</Button>
			</div> */}

			{/* <p text="bold gray-400">浅色按钮：</p>

			<div className = 'grid md:grid-cols-5 sm:grid-cols-2 gap-x-4 gap-y-4 mt-3'>
				{
					lightBtn.map(( i, index ) => {
						return <Button skin ='light' key = {index} block={i.block} type = {i.type} onClick={i.onClick}>
											{i.name}
										</Button>
					})
				}
			</div> */}

			{/* <p text="bold gray-400">线框：</p>
			<div className = 'space-x-4'>
				<Button theme="plain">默认</Button>
				<Button theme="plain" type = 'primary'>主要</Button>
				<Button theme="plain" type = 'warning'>警告</Button>
				<Button theme="plain" type = 'danger'>危险</Button>
				<Button theme="plain" type = 'success'>成功</Button>
			</div>

			<p text="bold gray-400">无背景：</p>
			<div className = 'space-x-4'>
				<Button theme="borderless">默认</Button>
				<Button theme="borderless" type = 'primary'>主要</Button>
				<Button theme="borderless" type = 'warning'>警告</Button>
				<Button theme="borderless" type = 'danger'>危险</Button>
				<Button theme="borderless" type = 'success'>成功</Button>
			</div>

			<p text="bold gray-400">禁用：</p>
			<div className = 'space-x-4'>
				<Button disabled theme="plain" type = 'default'>默认</Button>
				<Button disabled type = 'primary'>主要</Button>
				<Button disabled theme="dark" type = 'warning'>警告</Button>
				<Button disabled theme="borderless" type = 'danger'>危险</Button>
				<Button disabled theme="plain" type = 'success'>成功</Button>
			</div>


			<p text="bold gray-400">图标：</p>
			<div className = 'space-x-4'>
				<Button icon={<IconCamera />} theme="dark" type = 'warning'></Button>
				<Button icon={<IconCamera />} type = 'success'>图标按钮</Button>
				<Button size="small" icon={<IconChevronDown />} iconPosition='right' theme = "dark" type = 'danger'>右侧图标</Button>
			</div>

			<p text="bold gray-400">加载状态：</p>
			<div className = 'space-x-4'>
				<Button type = 'success' loading = {true}>保存</Button>
				<Button loading = {true} theme="dark" type = 'warning'>图标按钮</Button>
				<Button loading = { delLoading }  icon={<IconDelete />} theme = "plain" type = 'danger' onClick={() => setDelLoading(true)}>删除</Button>
			</div>


			<p text="bold gray-400">按钮组合：</p>
			<div className = 'grid gap-y-4'>
				{
					groupBtnType.map((i, index) => {
					return <ButtonGroup key = { index } type = { i.type } size = {i.size} disabled = {i.disabled}>
							<Button>拷贝</Button>
							<Button>查询</Button>
							<Button>查询</Button>
							<Button>剪切</Button>
						</ButtonGroup>
					})
				}
			</div> */}


    </>
  );
};

export default Guide;
