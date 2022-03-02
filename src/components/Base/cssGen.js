import commonStyle from './theme/common.js'
import lightStyle from './theme/light.js'
import darkStyle from './theme/dark.js'

const jsxFileContent = (jsFile) => [
	'export default'
, JSON.stringify(jsFile, null, 2)
].join(' ')



await Deno.writeTextFile('../Css/common.jsx', jsxFileContent(commonStyle))
await Deno.writeTextFile('../Css/light.jsx', jsxFileContent(lightStyle))
await Deno.writeTextFile('../Css/dark.jsx', jsxFileContent(darkStyle))