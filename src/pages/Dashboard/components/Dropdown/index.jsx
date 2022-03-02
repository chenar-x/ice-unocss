import React from 'react';

import { Dropdown } from '@douyinfe/semi-ui';
import DropdownMenu from './dropdownMenu';

import { 
	IconBox
	, IconSimilarity
	, IconSetting
	, IconForward
	, IconColorPalette
	, IconRefresh
	, IconSearch
	, IconBranch 
} from '@douyinfe/semi-icons';

import classnames from 'classnames'


function UDropdown(props) {
	const { ddRender, menu,  trigger} = props

	const dropDownClass = classnames('text-sm relative')
	const ddItem = 'flex space-x-2 py-8px px-16px cursor-pointer hover:bg-gray-100 items-center max-w-280'

  return (
    <Dropdown
		 trigger = { trigger }
		//  menu = { menu }
		 className={ dropDownClass }

		render = {
				<Dropdown.Menu className='bg-white py-2 rounded shadow-md'>
					<Dropdown.Item className={ ddItem }>
						<IconBox />
						<span>Menu Item 1</span>
					</Dropdown.Item>
					<Dropdown.Item className={ ddItem }>
						<IconSetting />
						<span>Menu Item 2</span>
					</Dropdown.Item>
					<Dropdown.Item className={ ddItem } disabled>
						<IconForward />
						<span>Menu Item 3</span>
					</Dropdown.Item>
					{/* <Dropdown.Item icon={<IconBranch />} type="primary">
							primary
					</Dropdown.Item>
					<Dropdown.Item icon={<IconColorPalette />} type="secondary">
							secondary
					</Dropdown.Item>
					<Dropdown.Item icon={<IconRefresh />} type="tertiary">
							tertiary
					</Dropdown.Item>
					<Dropdown.Item icon={<IconSearch />} type="warning">
							warning
					</Dropdown.Item>
					<Dropdown.Item
							icon={<IconSimilarity style={{ color: 'var(--semi-color-tertiary)' }} />}
							type="danger"
					>
							danger
					</Dropdown.Item> */}
				</Dropdown.Menu>
		}
		 
		>
      	{ props.children }
			{/* <DropdownMenu>
				{ props.children }
			</DropdownMenu> */}
    </Dropdown>

  );
}

export default UDropdown;
