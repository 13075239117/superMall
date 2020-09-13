<template>
	<swiper class='DSItem'>
		<SwiperItem  v-for='item in DSimage' class='Item'>
			<img :src="item" alt="">
		</SwiperItem>
	</swiper>
</template>

<script>
	import {Swiper, SwiperItem} from '../../../components/common/swiper/index.js'
	export default{
		name:"detailswiper",
		props:{
			DSimage:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style scoped>
	.Item{
		/* height: 400px; */
		padding: 0 3px;
	}
	.Item img{
		width: 100%;
		height: 400px;
	}
</style>
