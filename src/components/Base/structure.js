import { colors } from './constants.js'
import { Rule } from './cssRules.js' 

// const colorGroup = (bg,heavy) => {
// 	return (
// 			Object.keys(colors).reduce((map,item) => {
// 				const head = item
// 				const value = colors[item]
	
// 				map[head] = map[head] || {}

// 				head === 'light' 
// 				? [
// 					map[head]['base'] = Rule([bg, value, 100]),
// 					map[head]['hover'] = Rule([bg, value, 200],['hover'])
// 				]
// 				: [
// 					map[head]['base'] = Rule([bg, value, heavy]),
// 					map[head]['hover'] = Rule([bg, value, heavy + 100],['hover'])
// 				]
// 				return map
// 			}, 
// 			{})
// 	)
// }

// colors km fn
const colorGroup = (type, prefix, prefixTheme) => 
	Object.keys(colors).reduce(
	(r,c) => {
		const value = colors[c]
		r[c] = r[c] || {}	
			prefixTheme === undefined
			? [
					r[c]['base'] = Rule([type, value[0], value[1]]),
					r[c][prefix] = Rule([type, value[0], value[1] + 100], [prefix])
				]
			: [
				r[c]['base'] = Rule([type, value[0], value[1]], [prefixTheme]),
				r[c][prefix] = Rule([type, value[0], value[1] - 100], [prefixTheme, prefix])
			]
	return r
	},{}
)

 
const sizeGroup = (head, title, des, prefix) => {
	return (
		head.reduce(
			(r, c, i) => {
				r[c] = r[c] || []
				head.length === des.length
				? prefix === undefined ? r[c] = Rule([title, des[i]]) : r[c] = Rule([title, des[i]], [prefix])
				: i === 0
					? r[c] = Rule([title]) 
					: r[c] = Rule([title, des[i-1]])
				return r
			}, {}
		)
	)
}


// left and right
const nestedGroup = (top, head, title, des) => {
	return (
		top.reduce(
			(r,c,i) => {
				r[c] = r[c] || {}
				r[c] = sizeGroup(head, title[i], des)
			return r
			},{}
		)
	)
}

const kvGroup = (arrList, type) =>
Object.keys(arrList).reduce(
		(r,c) => {
		const value = arrList[c]
			r[c] = r[c] || {}	
			r[c] = Rule([type, value])
		return r
	},{}
)

export {
	colorGroup, 
	sizeGroup, 
	nestedGroup,

	kvGroup
}