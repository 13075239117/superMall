<template>
	<div class="goods">
		<GoodsListItem v-for='item in goodList' :goodListitem='item'></GoodsListItem>
	</div>
</template>

<script>
	import GoodsListItem from './goodListItem.vue'
	export default{
		name:'goodList',
		props:{
			goodList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsListItem
		},
		// created() {
		// 	console.log(123)
		// }
	}
</script>

<style scoped>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
</style>
