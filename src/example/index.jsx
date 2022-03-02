import React, { useState } from 'react';
import { cTheme, cStyle } from '../components/Css'

// import { Typography } from '@douyinfe/semi-ui';
import { Layout, Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';


import Typography from '../components/Typography'
import PTypography from './typography';
import Button from '../components/Button'

const loopMenuItem = (menus) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: createElement(icon),
    children: children && loopMenuItem(children),
  }));

function Example() {
	const { Header, Sider, Content } = Layout;

	const [curTheme, setCurTheme] = useState('light')
	const { Title, Text, Paragraph } = Typography

	const bStyle = cTheme[curTheme].BgColor[curTheme]
	document.getElementsByTagName('body')[0].className = bStyle 

	const btnFun = () => { return console.log('hhhhh') };

  return (		
		<Layout className="components-layout-demo">
				<Header>
					<Nav mode="horizontal">
						<Nav.Header>
							<Button onClick={() => curTheme === 'light' 
									? [ setCurTheme('dark'), document.documentElement.setAttribute('class', 'dark') ]
									: [ setCurTheme('light'), document.documentElement.removeAttribute('class')]
								}> 
								切换主题 
							</Button>
						</Nav.Header>
					</Nav>
				</Header>
				<Layout>
						<Sider>
							<Nav
									style={{ maxWidth: 220, height: '100%' }}
									defaultSelectedKeys={['Home']}
									items={[
										{ itemKey: 'Home', text: '版式', icon: <IconHome size="large" /> },
										// { itemKey: 'Histogram', text: '按钮', icon: <IconHistogram size="large" /> },
										// { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
										// { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
									]}
									// footer={{
									// 		collapseButton: true,
									// }}
							/>
						</Sider>
						<Content style={{ padding: '24px' }}>
							<Title theme= {curTheme}>icejs + semi + uno</Title>

							<PTypography 
								theme = {curTheme} 
							/>

				
						</Content>
				</Layout>
		</Layout>
  );
}

export default Example;
