<template>
	<div id="home">
		<!-- <h2 style="font-size: 60px">首页</h2> -->
		<NavBar class='homenav'>
			<div slot='center'>首页</div>
		</NavBar>
		<tapControl 
			id='tapControl'
			:titles='title' 
			class='tapControl' 
			@tapClick='getIndex' 
			ref='tapControl2' 
			v-show='tapShow'></tapControl>
		<BScroll 
			class='content' 
			ref='content' 
			@scroll='getposition' 
			:probeType='probeType' 
			@loadMore='loadMore' 
			:pullUpLoad='true'>
			<homeswiper :banner="banner" @SwiperImageLoad='SwiperImageLoad'></homeswiper>
			<RecommendView :recommend='recommend'></RecommendView>
			<FeatureView></FeatureView>
			<tapControl :titles='title' class='tapControl' @tapClick='getIndex' ref='tapControl1'></tapControl>
			<GoodList :goodList="showGoods"></GoodList>
		</BScroll>
		<topback v-show="topback" @click.native='backTop'></topback>
	</div>
</template>

<script>
	import homeswiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import NavBar from '../../components/common/navbar/Navbar.vue'

	import tapControl from '../../components/content/tapControl/tapControl.vue'
	import GoodList from '../../components/content/goods/goodList.vue'
	import topback from '../../components/content/topback/topback.vue'
	import BScroll from '../../components/common/scroll/scroll.vue'
	import {
		gethomeMultidata,
		gethomegoods
	} from '../../network/home.js'
	import {
		debounce
	} from '../../common/utils.js'
	export default {
		name: 'home',
		data() {
			return {
				banner: [],
				recommend: [],
				title: ['流行', '新款', '精选'],
				goods: {
					pop: {
						page: 0,
						list: []
					},
					sell: {
						page: 0,
						list: []
					},
					new: {
						page: 0,
						list: []
					},
				},
				currentIndex: 'pop',
				topback: false,
				probeType: 3,
				tapoffsetTop: '',
				tapShow: false,
				pageY:0
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentIndex].list
			}
		},
		created() {
			this.gethomeMultidata()
			this.gethomegoods('pop')
			this.gethomegoods('sell')
			this.gethomegoods('new')

		},
		mounted() {
			const refresh = debounce(this.$refs.content.refresh, 50)
			this.$bus.$on('loadFinish', () => {
				refresh()
			})
			// console.log(this.$refs.tapControl.$el.offsetTop)
			// console.log(this.$refs.tapControl2)
		},
		// activated() {
		// 	console.log(this.pageY)
		// 	// console.log(this.$refs.content.scroll)
		// 	this.$refs.content.scrollTo(0,this.pageY,0)
		// 	// this.$refs.content.refresh();
		// },
		// deactivated() {
		// 	// console.log('deactivated')
		// 	this.pageY = -this.$refs.content.scroll.y
		// 	// console.log(this.pageY)
			 
		// },
		methods: {
			gethomeMultidata() {
				gethomeMultidata().then(res => {
					// console.log(res)
					this.banner = res.data.banner.list
					this.recommend = res.data.recommend.list
					// console.log(this.recommend)
				}).catch(err => {
					console.log(err)
				})
			},
			gethomegoods(type) {
				const page = this.goods[type].page + 1
				gethomegoods(type, page).then(res => {
					// console.log(res)
					this.goods[type].list.push(...res.data.list)
					// this.img=res
					this.goods[type].page += 1
					this.$refs.content.finishPullUp()

				})

			},
			getIndex(a) {
				// console.log(this.$refs.tapControl1.currentindex)
				// this.$refs.tabControl2.currentindex = a
				// this.$refs.tapControl1.currentindex = a
				switch (a) {
					case 0:
						this.currentIndex = 'pop';
						break;

					case 1:
						this.currentIndex = 'sell';
						break;

					case 2:
						this.currentIndex = 'new';
						break;
				}
				// console.log(a)
				// this.$refs.tabControl1.currentindex = a
				// this.$refs.tapControl2.currentindex = a
				
			},
			getposition(position) {
				this.topback = (-position.y) > 1000
				// console.log((-position.y))
				this.tapShow = (-position.y)>621?true : false
			},
			backTop() {
				// console.log(this.$refs.content)		
				this.$refs.content.scrollTo(0, 0)
			},
			loadMore() {
				this.gethomegoods(this.currentIndex)
			},
			SwiperImageLoad() {
				// console.log(this.$refs.tapControl.$el.offsetTop)
				console.log('ok')
				this.tapoffsetTop = this.$refs.tapControl1.$el.offsetTop
			}
		},

		components: {
			homeswiper,
			RecommendView,
			FeatureView,
			NavBar,
			BScroll,
			tapControl,
			GoodList,
			topback
		}
	}
</script>

<style scoped>
	#home {
		/* padding-top: 44px; */
		/* position: relative; */
		height: 100vh;
		position: relative;
		/* padding-bottom: 49px; */
	}

	.homenav {
		top: 0;
		width: 100%;
		background-color: var(--color-tint);
		position: fixed;
		z-index: 9;
		/* padding-bottom: 44px; */
	}

	.tapControl {
		position: sticky;
		top: 44px;
		background-color: white;
		z-index: 9;
		
	}
	#tapControl{
		padding-bottom: 8px;
	}
	.content {
		/* position: absolute;
		top: 44px;
		bottom: 49px; */
		/* overflow: hidden; */
		/* background-color: red; */
		/* height: 250px; */
		/* height: 400px; */
		/* overflow: hidden; */

		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
