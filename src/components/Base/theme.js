import light from './theme/light.js'
import dark from './theme/dark.js'

const switchMode = () => {
	const body = document.documentElement;
	
	if (body.hasAttribute('class')) {
		body.removeAttribute('class');
		// return light
	} else {
		body.setAttribute('class', 'dark');
		// return dark
	}
	
}


export { switchMode }