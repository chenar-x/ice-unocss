// const primaryBase = ' 500'
import result from './util'
 
// const S = {
// 	prefix: 'hover'
// 	, name: 'bg'
// 	, color: 'blue'
// }



// 	return [
// 		obj.prefix
// 	, obj.arr
// 	]
// 	// .join(':')
// }

// const ncn = className.reduce((acc, name) => {

// if (name === 'prefix') {
// 	obj[name] = 'hover:'
// } else {
// 	name = '222'
// }
	



// const people = [
//     {sex:"Male", name:"Jeff"},
//     {sex:"Female", name:"Megan"},
//     {sex:"Male", name:"Taylor"},
//     {sex:"Female", name:"Madison"}
// ];

// const join = obj => {

// 	// 'hover:bg-amber-600'
// 	// {
// 	// 	prefix: 'hover'
// 	// , bg: 'bg'
// 	// , cloer: 'amber'
// 	// , havey: 600
// 	// }
// 	const obj_ = Object.keys(obj).reduce(
// 		(r, c) => {
//       if (c === 'prefix')
// 		  {
// 				return {
// 						prefix: c
// 					, arr: r.arr
// 				}
// 			}
// 			else {
// 				return {
// 					prefix: obj.prefix
// 				, arr: [
// 						...r.arr
// 				  , obj.c
// 					]
// 				}
// 			}

// 		}
// 	, {
// 			prefix: ''
// 		, arr: []
//  	  }
// 	)
 
// 	return [
// 		obj.prefix
// 	, obj_arr.join('-')
// 	]
// 	.join(':')
// }



// console.log(groupedPeople);

// const arr = ['codeHjjjh', 'codeCn', 'taobao.cn', 'taobao.com'];
// const arrSplit = arr.map(item => {
//   if (item.indexOf('.')!== -1){
//     return item.replace(/(\.)/g, ",$1").split(',')
//   } else {
//     return item.replace(/([A-Z])+/g, ",$1").split(',')
//   }
// })


// const baseArr = colorCur.map((item, index) => {
// 	[typeCur,item,'500'].join('-')
// })
// const baseArr = [typeCur,colorCur[1],'500'].join('-')



// const baseArr = colorCur.reduce((curr) => {
// 	return console.log(curr);
// })





// const resultNew = (obj => {
// 	console.log(obj.base, obj.hover);
// })

// resultNew({
// 	base: baseArr,
// 	hover:hoverArr
// })



// const genHoverColor = (baseObj) => {
//   const baseObj_ = {
// 	  bg
// 	, heavy: 500
// 	, ...baseObj
// 	}
// 	return {
// 		base: join(baseObj_)
// 	, hover: join({
//       ...baseObj_
// 		, hover
// 		, heavy: baseObj_ + 100
// 	  })
// 	}
// }



// const result = list.reduce((map, item) => {
// 		const [head, tail] = item.split(/(?=\.)/)
// 		const val = tail.replace(/(\.)/g, '')

// 		map[head] = map[head] || {}

// 		head === 'none'
// 		? map[head] = getBgColor(val,'bg', 500).none
// 		: head === 'light' 
// 		? [
// 			map[head]['base'] = getBgColor(val,'bg', 100).base,
// 			map[head]['hover'] = getBgColor(val,'bg', 200).hover
// 		]
// 		: [
// 			map[head]['base'] = getBgColor(val,'bg', 500).base,
// 			map[head]['hover'] = getBgColor(val,'bg', 600).hover
// 		]

// 		return map
// 	}, {})


// const getBgColor = (name,type, heavy) => {
// 	const none = [type, name].join('-')
// 	const color = [type, name, heavy].join('-')
	
// 	return {
// 		none: none
// 		, base: color
// 		, hover: ['hover',color].join(':')
// 	} 
// }


// 	const result = (bg,heavy) => Object.keys(colors).reduce((map,item) => {
// 		const head = item
// 		const value = colors[item]

// 		map[head] = map[head] || {}

// 		head === 'none'
// 		? map[head] = getBgColor(value, bg, heavy).none
// 		: head === 'light' 
// 		? [
// 			map[head]['base'] = getBgColor(value, bg, 100).base,
// 			map[head]['hover'] = getBgColor(value, bg, 200).hover
// 		]
// 		: [
// 			map[head]['base'] = getBgColor(value, bg, heavy).base,
// 			map[head]['hover'] = getBgColor(value, bg, heavy+100).hover
// 		]
// 		return map
// 	}, 
// 	{})



// const BgColorBase = cList.reduce((pre, item, array) => {
// 	const sss = {[item[0]]: getBgColor(item[1])}
// 	return pre[0]
// 	// return item
// },[])


// const BgColorBase = genHoverColor({
// 	primary: { blue }
// , warning: { amber }
// , danger: { red }
// , success: { emerald }
// , gray: { gray }
// , light: {
// 		gray
// 	, heavy: 100
// 	}
// })



// const objFun = Object.keys('bg-blue-500').reduce(
// 	(r, c) => {

// 	},{}
// )

// const BgColorBase = genHoverColor('blue')

// const BgColorBase = genHoverColor({
// 	primary: { blue }
// , warning: { amber }
// , danger: { red }
// , success: { emerald }
// , gray: { gray }
// , light: {
// 		gray
// 	, heavy: 100
// 	}
// })



const BgColor = { ...result('bg',500) }


const Border = {
	// none: [ 'border', 0 ]
	none: 'border-0' // { xx: 'border', xx: 'r', xx: 0 } / [ 'border' , 'r', 0 ]
	, base: 'border'
	, bottom: 'border-b border-l-0 border-t-0 border-r-0'
	, right: 'border-r border-l-0 border-t-0 border-b-0'

	, color: {
		...result('border',500)
		// primary: {
		// 	base: 'border-blue-500'
		// 	, hover: 'hover:border-blue-300'
		// },
	
		// warning: {
		// 	base: 'border-amber-500'
		// 	, hover: 'hover:border-amber-300'
		// },
	
		// danger: {
		// 	base: 'border-red-500'
		// 	, hover: 'hover:border-red-300'
		// },
	
		// success: {
		// 	base: 'border-emerald-500'
		// 	, hover: 'hover:border-emerald-300'
		// },
	
		// gray: {
		// 	base: 'border-gray-500'
		// 	, hover: 'hover:border-gray-300'
		// },
	
		// light: 'border-gray-200',
	}

	
}

const Font = {
	color: {
		...result('text',500),
		default: 'text-dark-500'
	}

	, size: {
			default: 'text-sm',
			small: 'text-xs',
			large: 'text-base'
		}

	, bold: 'font-semibold'
}

//---- Padding ----
const Padding = {
	button: {
		default: 'py-6px px-12px',
		small: 'py-1 px-2',
		large: 'py-12px px-16px'
	}
}

//---- Cursor ----
const Cursor = {
	pointer: 'cursor-pointer'
	, disable: 'cursor-not-allowed'
}

//---- Animation ----
const AnimateDur = 'duration-200'

//---- Opacity ----
const Opacity = {
	none: 'opacity-0',
	small: 'opacity-8',
	base: 'opacity-15',
	large: 'opacity-64',
}

//---- Rounded ----
const Rounded = {
	base: 'rounded',
	small: 'rounded-sm',
	large: 'rounded-lg',
	full: 'rounded-full',

	left: {
		default: 'rounded-l',
		large: 'rounded-l-lg',
		small: 'rounded-l-sm'		
	},

	right: {
		default: 'rounded-r',
		large: 'rounded-r-lg',
		small: 'rounded-r-sm'		
	}
}

//---- Sizing ----
const Sizing = {
	width: {
		full: 'w-full'
	}
}

export {
	BgColor
	, Border
	, Font

	, Padding

	, Cursor
	, AnimateDur
	, Rounded 
	, Opacity
	, Sizing
}
