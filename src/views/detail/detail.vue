<template>
	<div class="detail">

		<detailNavBar :titles='detailTitle' class='title'></detailNavBar>
		<backTop ref='backtop'  v-show='Showbacktop' @click.native='backTopshow'></backTop>
		<scroll class="detailscroll" @scroll='getposition' :probeType=3 ref='backTop123'>
			<DetailSwiper :DSimage='detailImage'></DetailSwiper>
			<detailIntroduce :introduce='Goodsintroduce.title' :lowprice='Goodsintroduce.lownowPrice' :highprice='Goodsintroduce.highnowPrice'
			 :sell='Goodsintroduce.column' :sevices='Goodsintroduce.shopInfo.services'>
			</detailIntroduce>
			<detailStore :shopinfo='Goodsintroduce.shopInfo'></detailStore>
			<detailpromotions :promotions='Goodspromotions.promotions.list'></detailpromotions>
			<detailshow :pictureshow='Goodspromotions.detailInfo.detailImage'></detailshow>
			<detailsize :size="Goodsize"></detailsize>
			<detailrate :rate='Goodspromotions.detailrate'></detailrate>
		</scroll>
	</div>
</template>
<script>
	import {
		detailSwipterdata,
		detailGoods,
		detailShop,
		detailShoppromotions
	} from '../../network/detail.js'

	import detailrate from './childComps/detailrate.vue'
	import detailsize from './childComps/detailsize.vue'
	import detailshow from './childComps/detailshow.vue'
	import detailpromotions from './childComps/detailpromotions.vue'
	import detailStore from './childComps/detailStore.vue'
	import detailIntroduce from './childComps/detailIntroduce.vue'
	import DetailSwiper from './childComps/DetailSwiper.vue'
	import detailNavBar from './childComps/detailNavBar.vue'
	
	import backTop from '../../components/content/topback/topback.vue'
	import scroll from '../../components/common/scroll/scroll.vue'
	export default {
		name: 'detail',
		data() {
			return {
				iid: null,
				detailTitle: [
					'商品', '参数', '评论', '推荐'
				],
				detailImage: [],
				Goodsintroduce: {},
				Goodspromotions: {},
				goodPrice: [],
				Goodsize: {},
				Showbacktop:false
			}
		},
		components: {
			backTop,
			scroll,
			detailNavBar,
			DetailSwiper,
			detailIntroduce,
			detailStore,
			detailpromotions,
			detailshow,
			detailsize,
			detailrate
		},
		methods:{
			getposition(position){
				// console.log(position.y)
				this.Showbacktop = -position.y>1000?true:false
				
			},
			backTopshow(){
				// console.log(123)
				this.$refs.backTop123.scrollTo(0,0)
			}
		},
		created() {
			this.iid = this.$route.params.iid
			detailSwipterdata(this.iid).then(res => {
				console.log(res)
				const obj = res.result
				// console.log(new detailGoods(obj.itemInfo,obj.coloum,obj.shopInfos))
				this.detailImage = res.result.itemInfo.topImages
				this.Goodsintroduce = new detailGoods(obj.itemInfo, obj.columns, obj.shopInfo)
				// console.log(this.Goodsintroduce.title)
				this.Goodsintroduce.column[2] = '72小时发货'
				this.Goodsintroduce.shopInfo.services.pop()
				this.Goodspromotions = new detailShoppromotions(obj.promotions, obj.detailInfo, obj.rate)
				// console.log(this.Goodspromotions.skuInfo.skus)
				this.Goodsize = obj.itemParams
				// this.Goodsrate = obj.
				console.log(this.Goodsize.rule)
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
	.detail {
		/* height: 100vh;
		position: relative; */
		height: 100vh;
		position: relative;
		/* z-index: 1; */
		background-color: #fff;
	}

	.detailscroll {
		/* height: 90vh; */
		/* margin-bottom: 49px; */
		/*   */
		/* 	overflow: hidden;
		height: 100vh-49px; */
		position: absolute;
		top: 44px;
		bottom: 49px;
		overflow: hidden;
	}
	
</style>
