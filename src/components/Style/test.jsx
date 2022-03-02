
import Rule from './twRules'
import kmConst from './constants';

import colors from '../Style/color'

const { 
	blue
	, amber
	, red
	, emerald 
	, gray

	, hover
	, bg

	, w
	, full
} = kmConst


// const BgColor = {
// 	primary: {
// 		base: Rule(hover,[bg, blue, 500])
// 		, hover: Rule(hover, [bg, blue, 500])
// 	},
// 	warning: {
// 		base: Rule(hover,[bg, amber, 500])
// 		, hover: Rule(hover, [bg, amber, 500])
// 	},
// 	danger: {
// 		base: Rule(hover,[bg, red, 500])
// 		, hover: Rule(hover, [bg, red, 500])
// 	},
// 	success: {
// 		base: Rule(hover,[bg, emerald, 500])
// 		, hover: Rule(hover, [bg, emerald, 500])
// 	},
// 	gray: {
// 		base: Rule(hover,[bg, gray, 500])
// 		, hover: Rule(hover, [bg, gray, 500])
// 	}
// }

const bgDanger = Rule([w, full])

// const Sizing = Rule([w, full])


// const Test = () => {
// 	return console.log(bgDanger);
// } 

// export default Test
export {
	bgDanger
}



