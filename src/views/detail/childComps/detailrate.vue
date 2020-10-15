<template>
	<div>
		<div><span>用户评价({{rate.cRate}})</span></div>
		<div class="user"><img :src="rate.list[0].user.avatar" alt="">{{rate.list[0].user.uname}}</div>
		<div class="rate"><span>{{rate.list[0].content}}</span></div>
		<div class="date">{{rate.list[0].created | ratetime}}</div>
		<div class="userStyle">{{rate.list[0].style}}</div>
	</div>
</template>
<script>
	import {debounce,formatDate} from '../../../common/utils.js'
	export default {
		name:"detailrate",
		props:{
			rate:Object,
			default(){
				return {}
			}
		},
		filters:{
			ratetime(da){
				let time = new Date(da*1000)
				return formatDate(time,'yyyy:mm:dd')
			}
		}
		// created() {
		// 	console.log(this.rate)
		// }
	}
</script>

<style scoped>
	.user img{
		width: 30px;
		height: 30px;
	}
</style>
