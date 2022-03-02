const Rule = (...args) => {
	const	cssString = args.length === 2
		? [args[1].join(':'),args[0].join('-')].join(':') 
		: args[0].join('-')
	return cssString
}

const kmFn = (obj) => {
	return(
		obj.reduce(
			(r,c) => {
				return {
					...r,
					[c]: c
				}
			},{}
		)
	)
}

export {
	Rule
	, kmFn
} 
