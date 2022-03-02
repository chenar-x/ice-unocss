import style from '../Css/common.jsx'
import dark from '../Css/dark.jsx'
import light from '../Css/light.jsx'
import classnames from 'classnames'

const cTheme = {
	light
, dark
}
const type = ['primary', 'warning', 'danger', 'success']
const size = ['small', 'default', 'large']
const shape = ['rounded']

// init style
const BgColor = 'BgColor'

const base = [style.FontBase.bold, style.AnimateDur]

const themeType = (style) => {
	// return console.log( cTheme[tstype].BgColor.primary.base ) 
	return [style.BgColor.default, style.FontBase]
} 

// console.log(themeType('dark').BgColor.primary.base) 

const typeCss = (nt, bType, theme) => bType === undefined 
			// ? cTheme[theme][nt].primary.base
			? theme === undefined ? cTheme.light.BgColor.primary.base : cTheme(theme).BgColor[bType].base
			: theme === undefined ? cTheme.light.BgColor[bType].base : cTheme(theme).BgColor[bType].base


const themeCss = (bSkin, bType) => {

	const cBorder = bSkin === 'ghost' ? style.BorderBase.base : style.BorderBase.none
	const cColor = bSkin === 'light' 
		? [typeCss("FontColor", bType)] 
		: [typeCss("BgColor", bType), style.FontBase.white]
	return [ cBorder, cColor ]	
}

const sizeCss = (bs) => [
	style.paddingX[bs], style.paddingY[bs], style.FontBase.size[bs], style.Rounded[bs] 
]

const btnCss = (btnType, btnSkin, btnSize, theme) => 
	classnames(
		base
		, theme === undefined ? themeType(cTheme['light']) : themeType(cTheme[theme])
		// , themeCss(btnSkin, btnType)
		// , theme === undefined ? themeStyle('light') : themeStyle('dark')
		// , btnSkin === undefined ? themeCss('light', btnType, theme) : themeCss(btnSkin, btnType, theme)
		// , btnSize === undefined ? sizeCss('default') : sizeCss(btnSize)
	)

export {
	btnCss
 }
