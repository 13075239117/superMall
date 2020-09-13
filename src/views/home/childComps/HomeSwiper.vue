<template>
	<Swiper>
	<SwiperItem v-for='item in banner' >
		<a :href="item.link"><img :src="item.image" alt="" @load="ImgLoad"></a>
	</SwiperItem>
	</Swiper>
</template>

<script>
	import {Swiper, SwiperItem} from '../../../components/common/swiper/index.js'
	export default{
		data(){
			 return{
				 showData:false
			 }
		},
		props:{
			banner:''
		},
		components:{
			SwiperItem,
			Swiper
		},
		methods:{
			ImgLoad(){
				if(!this.showData){
					this.$emit('SwiperImageLoad')
					this.showData=true
				}
			}
		}
	}
</script>

<style scope>
</style>

