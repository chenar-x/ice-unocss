import React from 'react';

import colors from './color'

const getBgColor = (name,type, heavy) => {
	const none = [type, name].join('-')
	const color = [type, name, heavy].join('-')
	
	return {
		none: none
		, base: color
		, hover: ['hover',color].join(':')
	} 
}

const result = (bg,heavy) => {
	return (
			Object.keys(colors).reduce((map,item) => {
				const head = item
				const value = colors[item]
	
				map[head] = map[head] || {}
	
				head === 'none'
				? map[head] = getBgColor(value, bg, heavy).none
				: head === 'light' 
				? [
					map[head]['base'] = getBgColor(value, bg, 100).base,
					map[head]['hover'] = getBgColor(value, bg, 200).hover
				]
				: [
					map[head]['base'] = getBgColor(value, bg, heavy).base,
					map[head]['hover'] = getBgColor(value, bg, heavy+100).hover
				]
				return map
			}, 
			{})
	)
}

export default result;






