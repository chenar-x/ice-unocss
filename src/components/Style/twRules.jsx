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

// import { bg, green } from './constants.js';

// const ruleObj = {
//   prefix: 'hover'
// , xx: bg
// , xx: green
// , xx: 500
// , ..
// }



const rule = ruleObj => {

	// console.log(ruleObj);

	// const obj_ = Object.keys(ruleObj).reduce(
	// 	(r, c) => {
	// 		return {
	// 			prefix: ruleObj[c] 
	// 		}
	// 	}, 
	// 	{}
	// )

	// if (ruleObj.other === undefined)
	// {
	// 	if (ruleObj.prefix === undefined)
	// 	{
	// 		return [
	// 			ruleObj.type
	// 			, ruleObj.title
	// 		].join('-')	
	// 	} else {
	// 		return [		
	// 			ruleObj.prefix
	// 			, [
	// 					ruleObj.type
	// 					, ruleObj.title
	// 					, ruleObj.heavy
	// 				].join('-')
	// 		].join(':')
	// 	}
	// } else {
	// 	return [	
	// 		ruleObj.other
	// 		, [ruleObj.prefix
	// 		, [
	// 				ruleObj.type
	// 				, ruleObj.title
	// 				, ruleObj.heavy
	// 			].join('-')
	// 			].join(':')
	// 		].join(':')
	// }

	const mainFun = () => 
	ruleObj.title === undefined
		? ruleObj.type
			: ruleObj.heavy === undefined
			? [
				ruleObj.type
				, ruleObj.title
			].join('-')	
		: [
			ruleObj.type
			, ruleObj.title
			, ruleObj.heavy
		].join('-')	
	
	
	
	return ruleObj.other === undefined	
		? ruleObj.prefix === undefined 
			? mainFun
			: [ruleObj.prefix
				, ruleObj.title === undefined
					? ruleObj.type
						: ruleObj.heavy === undefined
						? [
							ruleObj.type
							, ruleObj.title
						].join('-')	
					: [
						ruleObj.type
						, ruleObj.title
						, ruleObj.heavy
					].join('-')
				].join(':')
		: [
				ruleObj.other
				, [ruleObj.prefix
				, ruleObj.title === undefined
					? ruleObj.type
						: ruleObj.heavy === undefined
						? [
							ruleObj.type
							, ruleObj.title
						].join('-')	
					: [
						ruleObj.type
						, ruleObj.title
						, ruleObj.heavy
					].join('-')
					].join(':')
			].join(':')
	


		// ].join(':')

	

	// return obj_
	// if (ruleObj.prefixes === '') {
	// 	return [		
	// 		ruleObj.prefixes
	// 		, [
	// 				ruleObj.type
	// 				, ruleObj.title
	// 				, ruleObj.heavy
	// 			].join('-')
	// 	].join(':')
	// } else {
		
	// 		ruleObj.prefixes
	// 		, [
	// 				ruleObj.type
	// 				, ruleObj.title
	// 				, ruleObj.heavy
	// 			].join('-')
		
	// }


	// const obj_ = Object.keys(ruleObj).reduce(
	// 	(r, c) => {
	// 		if (c === 'prefixes'){
	// 				return [		
	// 					ruleObj.prefixes
	// 					, [
	// 							ruleObj.type
	// 							, ruleObj.title
	// 							, ruleObj.heavy
	// 						].join('-')
	// 				].join(':') 
	// 		} else {
	// 			return ruleObj.prefixes
	// 							, [
	// 									ruleObj.type
	// 									, ruleObj.title
	// 									, ruleObj.heavy
	// 								].join('-')
	// 		}
	// 	},{}
	// )



	
}


// sn: []
// const Rule = (...args) => {

	const fn = {
		zim: zimArr => {
			const keys = [
				'title'
			, 'type'
			, 'heavy'
			]		

			return zimArr.reduce(
					(r, c, i) => {
						return i < 3
						? {
							...r
						, [keys[i]]: c
						}
						: r
					}
				, {}
			)
		}
	, prefix: x => {
		  return {
		  	prefix: x
			}
	  }
	}

	// return [
	// 	'zim'
	// , 'prefix'
	// ].reduce(
	// 	(r, c, i) => {
	// 		return i < 2
	// 		? {
	// 			...r
	// 		, ...fn[c](args[i])
	// 		}
	// 		: r
	// 	}
	// , {}
	// )
// }	

const Rule = (...args) => {
	const	cssString = args.length === 2
		? [args[1].join(':'),args[0].join('-')].join(':') 
		: args[0].join('-')
	return cssString
}

	// const cLength = args.length

	// const cMain = args[0]
	// const cPrefix = args[1]
	// const cOther = args[2]

	// const cType = args[0][0]
	// const cDec = args[0][1]
	// const cDetail = args[0][2]
 
	// return cLength === 1
	// 	? cMain.length === 1
	// 		? rule({type: cType}) 
	// 		: cMain.length === 2 
	// 			? rule({
	// 				type: cType
	// 				, title: cDec
	// 				, heavy: cDetail
	// 			}) 
	// 			: cMain.length === 3 
	// 				? rule({
	// 					type: cDetail
	// 				}) 
	// 				: null
	// 	: args.length === 2 ? null : args.length === 3 
	// 		? null 
	// 		: null

	// return rule(

	// 	cLength === 1
	// 	? cMain === 1 ? { type: cType } 
	// 		: cMain === 2 ? { type: cType, title: cDec } 
	// 		: { type: cType, title: cDec, heavy: cDetail } 
	// 	: cLength === 2 
	// 		? cMain === 1 ? { prefix:cPrefix, type: cType } 
	// 			: cMain === 2 ? { prefix:cPrefix, type: cType, title: cDec } 
	// 			: { prefix:cPrefix, type: cType, title: cDec, heavy: cDetail } 
	// 	: cLength === 3
	// 		? cMain === 1 ? {other:cOther, prefix: cPrefix, type: cType } 
	// 		: cMain === 2 ? {other:cOther, prefix:cPrefix, type: cType, title: cDec } 
	// 		: {other:cOther, prefix:cPrefix, type: cType, title: cDec, heavy: cDetail } 
	// 	: null		
	// )
						
	
	
	// args.length
	// const args = args.length,
	// if (args.length > 1){
	// 	if (args.length === 3){
	// 		return rule({
	// 			theme: args[2]
	// 			, prefixes: args[1]
	// 			, type: args[0][0]
	// 			, title: args[0][1]
	// 			, heavy: args[0][2]
	// 		})
			
	// 	} else {
	// 		return rule({
	// 			prefixes: args[1]
	// 			, type: args[0][0]
	// 			, title: args[0][1]
	// 			, heavy: args[0][2]
	// 		}) 	
	// 	}
	
	// } else {
	// 	return rule({
	// 		type: args[0][0]
	// 		, title: args[0][1]
	// 		// , heavy: sn[2]
	// 		// , prefixes
	// 	}) 
	// }


// export const Rule = () => {
// 	return rule({
// 		prefix: 'hover'
// 	, type: 'bg'
// 	, title: 'blue'
// 	, heavy: 500
// 	}),
// 	console.log('1111');
// }


export default Rule


// import { hover, bg, red } from './constants'
// Rule(hover, [bg, red, 500])
// 'hover:bg-red-500'