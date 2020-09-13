export function debounce(func, delay) {
	let timer = null;
	// console.log(this)
	return function(...args) {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			func.apply(this, args)
			// console.log(func)
		}, delay)
	}
}
