<template>
	<div>
		<div class="bottom-bar">
			<div class="bottom-left" v-for="item in bottomName"><div><img :src="item.b" alt=""></div><span>{{item.a}}</span></div>
			<div class="bottom-right" v-for="(item,index) in fuckShops1" :key="item.id" @click="click(item.c)"><span>{{item.a}}</span></div>		
			<!-- <div v-for="item in bottomName"><img :src="item.b"></div> -->
		</div>	
	</div>
</template>

<script>
	export default{
		name:'bottomNav',
		data(){
			return{
				// currentIndex:[]
				fuckShops1:[
					{a:'加入购物车',c:"pbuy"},
					{a:'购买',c:'buy'}
				]
			}
		},
		methods:{
			click(event){
				this[event]()
			},
			pbuy(){
				this.$emit('sentShops')
			}
		},
		props:{
			bottomName:{
				type:Array,
				default(){
					return []
				}
			},
		},
		created() {
			// console.log(this.bottomName)
			// console.log(this.bottomImg)
		}
	}
</script>

<style scoped>
	.bottom-bar{
		display: flex;
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	.bottom-left{
		height:49px ;
		flex: 1;
		background: white;
		/* border-right: 1px solid #222222; */
		text-align: center;
		/* position: relative; */
		/* position: fixed; */
	}
	.bottom-left img{
		width: 20px;
		height: 20px;
	}
	.bottom-right{
		height:49px ;
		flex: 1.5;
		background: #42B983;
		border-right: 1px solid #0055ff;
		text-align: center;
		line-height: 49px;
	}
</style>
