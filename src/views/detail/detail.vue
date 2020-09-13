<template>
	<div>
		<detailNavBar :titles='detailTitle'></detailNavBar>
		<DetailSwiper :DSimage='detailImage'></DetailSwiper>
		<detailIntroduce :introduce='Goodsintroduce.title' 
		:lowprice='Goodsintroduce.lownowPrice' 
		:highprice='Goodsintroduce.highnowPrice'
		:sell='Goodsintroduce.column'
		:sevices='Goodsintroduce.shopInfo.services'>
		</detailIntroduce>
		<detailStore :shopinfo='Goodsintroduce.shopInfo'></detailStore>
		<detailpromotions :promotions='Goodspromotions.promotions.list'></detailpromotions>
		<detailshow :pictureshow='Goodspromotions.detailInfo.detailImage'></detailshow>
	</div>
</template>
<script>
	import {detailSwipterdata,detailGoods,detailShop,detailShoppromotions} from '../../network/detail.js'
	
	import detailshow from './childComps/detailshow.vue'
	import detailpromotions from './childComps/detailpromotions.vue'
	import detailStore from './childComps/detailStore.vue'
	import detailIntroduce from './childComps/detailIntroduce.vue'	
	import DetailSwiper from './childComps/DetailSwiper.vue'
	import detailNavBar from './childComps/detailNavBar.vue'
	export default{
		name:'detail',
		data(){
			return{
				iid:null,
				detailTitle:[
					'商品','参数','评论','推荐'
				],
				detailImage:[],
				Goodsintroduce:{},
				Goodspromotions:{},
				goodPrice:[],
				
			}
		},
		components:{
			detailNavBar,
			DetailSwiper,
			detailIntroduce,
			detailStore,
			detailpromotions,
			detailshow
		},
		created() {
			this.iid = this.$route.params.iid
			detailSwipterdata(this.iid).then(res => {
				console.log(res)
				const obj = res.result
				// console.log(new detailGoods(obj.itemInfo,obj.coloum,obj.shopInfos))
				this.detailImage = res.result.itemInfo.topImages
				this.Goodsintroduce = new detailGoods(obj.itemInfo,obj.columns,obj.shopInfo)
				// console.log(this.Goodsintroduce.title)
				this.Goodsintroduce.column[2] = '72小时发货'
				this.Goodsintroduce.shopInfo.services.pop()
				this.Goodspromotions = new detailShoppromotions(obj.promotions,obj.detailInfo)
				// console.log(this.Goodspromotions.skuInfo.skus)
			})
		},
		// methods:{
		// 	getDetail(){
		// 		this.Goodsintroduce = new detailGoods()
		// 	}
		// }
		// destroyed() {
		// 	console.log(this.iid)
		// }
	}
</script>

<style scoped>
	
</style>
