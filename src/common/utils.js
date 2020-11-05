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

export function formatDate(date,fmt){	
	if((/(y+)/).test(fmt)){
		fmt = fmt.replace(RegExp.$1,date.getFullYear() + '')
	}
	let o = {
		'm+':date.getMonth() + 1,
		'd+':date.getDate(),
		'i+':date.getMinutes(),
		'c+':date.getSeconds()
	}
	for(let k in o){
		if(new RegExp("("+k+")").test(fmt)){
			let a = o[k] + ''
			// console.log(typeof o[k])
			fmt = fmt.replace(RegExp.$1,RegExp.$1.length===1?a:padLeftZero(a))
		}
		
	}
	function padLeftZero(b){
		// console.log(b.length)
		return ('00'+b).substr(b.length)
	}
	return fmt
}
