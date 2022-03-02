// keyMirror
// const km = () => {

// }



// const kmConst = constants.map(item => {
// 	return item
// })

// const kmConst = {
// 	red: 'red'
// 	, amber: 'amber'
// }

const constants = [
	'blue'
, 'amber'
, 'red'
, 'emerald'
, 'gray'

, 'hover'
, 'bg'

, 'transparent'

, 'w'
, 'full'
]

const kmConst = constants.reduce(
	(r,c) => {
		return {
			...r,
			[c]: c
		}
	},{}
)

export default kmConst

// const {
// 	blue
// , amber
// , red
// , emerald
// , gray
// , hover
// , bg	
// } = kmConst



// kmConst = constantshhh


// export {
// 	kmConst
// }

// export default kmConst



// const result = () => {
// 	return(
// 		constants.reduce(item => {
// 			return item
// 		},{})
// 	)
// }

// const hh = 'blue'
// const ttt = 'red'

// const kmConst = constants.map( item => {
// 	 return item
// })



// import {
// 	red
// } from './constants.js'

// red = 'red'




	// const newList = []
	// constants.map (element => {
	// 	// newList = element
	// 	// return newList
	// 	return element
	// });
	



