import request from './network.js'
export function gethomeMultidata(){
	return request({
		url:'/home/multidata'
	})
}
export function gethomegoods(type,page){
	return request({
		url:'/home/data',
		params:{
			type,
			page
			// tn:'baiduimage',
			// word:b
		}
	})
}